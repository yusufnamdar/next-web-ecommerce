import { Panel } from 'components/Panel'
import { useDispatch, useSelector } from 'react-redux'
import { getCart } from 'store/selectors'
import { Text } from 'components/Text'
import { useMemo } from 'react'
import { Box } from 'components/Box'
import { Row } from 'components/global'
import { optionTextMap } from 'utils/constants'
import { Counter } from 'components/Cart/Counter'
import { Icon } from 'components/Icon'
import Image from 'next/image'
import { updateQuantity, removeItem, emptyCart } from 'store/slice'
import { BorderAnimationStyled } from 'components/Cart/styled'
import { Button } from 'components/Button'
import { NextLink } from 'components/NextLink'

type ArrangedItem = { seller: string; result: ICartItem[] }

const CartPage = () => {
  const items = useSelector(getCart)
  const dispatch = useDispatch()

  //if the array is empty, it returns 0
  const { totalQuantity, totalPrice } = useMemo(
    () =>
      items.reduce(
        (accumulator, current) => {
          accumulator.totalPrice += current.sku.price * current.quantity
          accumulator.totalQuantity += current.quantity
          return accumulator
        },
        { totalQuantity: 0, totalPrice: 0 }
      ),
    [items]
  )

  //Merge cart items with the same seller
  const arrangedItems = useMemo(
    () =>
      items.reduce((accumulator: ArrangedItem[], current) => {
        const item = accumulator.find(
          (item) => item.seller?.toLowerCase() === current.seller.toLowerCase()
        )
        if (!item) {
          return [...accumulator, { seller: current.seller, result: [current] }]
        }
        item.result.push(current)
        return accumulator
      }, []),
    [items]
  )

  if (!totalQuantity) {
    return (
      <Panel
        maxWidth={1000}
        mx="auto"
        display="flex"
        flexDirection="column"
        alignItems="center"
        p={16}
      >
        <BorderAnimationStyled>
          <Box p={16}>
            <Image src="/empty-cart.svg" width={305} height={200} />
          </Box>
        </BorderAnimationStyled>
        <Text my={16} fontSize={24} fontWeight="semi-bold" color="gray.400">
          Your cart is empty
        </Text>
        <NextLink href="/">
          <Button width={202} height={44}>
            Start shopping
          </Button>
        </NextLink>
      </Panel>
    )
  }

  const onCounterChange = (sku: string) => (count: number) => {
    dispatch(updateQuantity({ sku, quantity: count }))
  }

  const onItemRemove = (sku: string) => {
    dispatch(removeItem({ sku }))
  }

  const onClearAllItems = () => {
    dispatch(emptyCart())
  }

  return (
    <>
      <Text fontSize={24} mb={16}>
        Shopping Cart{' '}
        {!!totalQuantity &&
          (totalQuantity > 1
            ? `(${totalQuantity} Items)`
            : `(${totalQuantity} Item)`)}
      </Text>
      <Row gap={24}>
        <Box position="relative" flexGrow={1}>
          <Box
            position="absolute"
            right={16}
            bottom="calc(100% + 16px)"
            onClick={onClearAllItems}
          >
            <Text
              className="hover-rose-color pointer"
              fontSize={14}
              fontWeight="semi-bold"
              color="gray.400"
            >
              clear all items
            </Text>
          </Box>
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
                  <Text
                    fontSize={14}
                    color="primary.500"
                    fontWeight="semi-bold"
                  >
                    <span className="gray-400">Seller:</span>{' '}
                    {mergedItem.seller}
                  </Text>
                </Box>
                {mergedItem.result.map((item) => {
                  const { sku, image, title, optionType, quantity } = item
                  return (
                    <Row
                      key={sku.sku}
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
                              {
                                optionTextMap[
                                  sku[optionType] as OptionValueType
                                ]
                              }
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
                        <Counter
                          count={quantity}
                          max={10}
                          onChange={onCounterChange(sku.sku)}
                        />
                        <Text
                          fontSize={14}
                          color="primary.400"
                          fontWeight="semi-bold"
                        >
                          $ {(sku.price * quantity).toLocaleString()}
                        </Text>
                        <Icon
                          className="hover-primary-color pointer"
                          name="delete"
                          color="gray.400"
                          onClick={onItemRemove.bind(null, sku.sku)}
                        />
                      </Box>
                    </Row>
                  )
                })}
              </Panel>
            )
          })}
        </Box>
        <Box width={250} minWidth={250}>
          <Panel position="sticky" top={16} right={0} p={16}>
            <Text fontSize={22} mb={16}>
              Summary
            </Text>
            <Box display="flex" justifyContent="space-between" mb={1} gap={10}>
              <Text fontSize={13} whiteSpace="nowrap">
                Total Product Price
              </Text>
              <Text
                fontSize={13}
                overflow="hidden"
                whiteSpace="nowrap"
                textOverflow="ellipsis"
              >
                $ {totalPrice.toLocaleString()}
              </Text>
            </Box>
            <Box display="flex" justifyContent="space-between" gap={10}>
              <Text fontSize={13} whiteSpace="nowrap">
                Total Cargo Price
              </Text>
              <Text fontSize={13}>$ 0</Text>
            </Box>
            <Box height={1} bg="gray.300" my={8} />
            <Text
              fontSize={16}
              textAlign="end"
              color="primary.500"
              fontWeight="semi-bold"
              overflow="hidden"
              whiteSpace="nowrap"
              textOverflow="ellipsis"
            >
              $ {totalPrice.toLocaleString()}
            </Text>
          </Panel>
        </Box>
      </Row>
    </>
  )
}

export default CartPage
