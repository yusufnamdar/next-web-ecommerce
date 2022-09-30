import { Box } from 'components/Box'
import { Panel } from 'components/Panel'
import { Text } from 'components/Text'
import { useSelector, useDispatch } from 'react-redux'
import { getFavorites } from 'store/selectors'
import { MouseEvent, useMemo } from 'react'
import { Row } from 'components/global'
import { Icon } from 'components/Icon'
import { optionTextMap } from 'utils/constants'
import { removeFavoriteItem } from 'store/slice'
import Image from 'next/image'
import Router from 'next/router'

type ArrangedItem = { seller: string; result: IFavoriteItem[] }

const FavoritesPage = () => {
  const favorites = useSelector(getFavorites)
  const dispatch = useDispatch()

  //Merge favorites with the same seller
  const arrangedItems = useMemo(
    () =>
      favorites.reduce((accumulator: ArrangedItem[], current) => {
        const item = accumulator.find(
          (item) => item.seller?.toLowerCase() === current.seller.toLowerCase()
        )
        if (!item) {
          return [...accumulator, { seller: current.seller, result: [current] }]
        }
        item.result.push(current)
        return accumulator
      }, []),
    [favorites]
  )

  if (!favorites.length) {
    return (
      <Panel
        maxWidth={1000}
        mx="auto"
        display="flex"
        flexDirection="column"
        alignItems="center"
        p={16}
      >
        <Box p={16}>
          <Image src="/no-data.svg" width={305} height={200} />
        </Box>
        <Text mt={16} fontSize={24} fontWeight="semi-bold" color="gray.400">
          Favorites are empty
        </Text>
      </Panel>
    )
  }

  const onFavoriteRemove = (sku: string) => (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    dispatch(removeFavoriteItem({ sku }))
  }

  return (
    <>
      <Text fontSize={24} mb={16}>
        Favorites{' '}
        {!!favorites.length &&
          (favorites.length > 1
            ? `(${favorites.length} Items)`
            : `(${favorites.length} Item)`)}
      </Text>
      <Box maxWidth={950}>
        {arrangedItems.map((mergedItem, index) => {
          return (
            <Panel
              key={mergedItem.seller}
              mb={index !== arrangedItems.length - 1 ? 16 : 0}
            >
              <Box
                p={16}
                bg="gray.100"
                borderTopLeftRadius="large"
                borderTopRightRadius="large"
              >
                <Text fontSize={14} color="rose.500" fontWeight="semi-bold">
                  <span className="gray-400">Seller:</span> {mergedItem.seller}
                </Text>
              </Box>
              {mergedItem.result.map((favoriteItem) => {
                const { _id, sku, image, title, optionType } = favoriteItem
                return (
                  <Row
                    key={sku.sku}
                    role="link"
                    tabIndex={0}
                    className="pointer"
                    onClick={() => Router.push(`/product/${_id}`)}
                    borderBottomColor="gray.200"
                    borderBottomWidth={1}
                    borderBottomStyle="solid"
                    p={16}
                    gap={16}
                  >
                    <Box
                      display="flex"
                      alignItems="center"
                      flexGrow={1}
                      gap={10}
                    >
                      <Box
                        position="relative"
                        minWidth={44}
                        width={44}
                        height={64}
                        borderRadius="small"
                        borderWidth={1}
                        borderStyle="solid"
                        borderColor="gray.400"
                        overflow="hidden"
                      >
                        <Image
                          src={image}
                          alt={sku.sku}
                          layout="fill"
                          placeholder="blur"
                          blurDataURL="https://via.placeholder.com/5"
                        />
                      </Box>
                      <div>
                        <Box maxHeight={40} mb={2}>
                          <Text
                            fontSize={14}
                            lineHeight={1.5}
                            multiLineTextOverflow
                          >
                            {title}
                          </Text>
                        </Box>
                        {optionType && (
                          <Text
                            className="capitalize"
                            fontSize={12}
                            color="gray.400"
                          >
                            {optionType}:{' '}
                            {optionTextMap[sku[optionType] as OptionValueType]}
                          </Text>
                        )}
                      </div>
                    </Box>
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                      width={288}
                      minWidth={288}
                    >
                      <Text
                        fontSize={14}
                        color="rose.500"
                        fontWeight="semi-bold"
                      >
                        $ {sku.price}
                      </Text>
                      <Icon
                        className="hover-rose-color"
                        cursor="pointer"
                        name="close"
                        color="gray.400"
                        onClick={onFavoriteRemove(sku.sku)}
                      />
                    </Box>
                  </Row>
                )
              })}
            </Panel>
          )
        })}
      </Box>
    </>
  )
}

export default FavoritesPage
