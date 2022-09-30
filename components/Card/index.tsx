import { Box } from 'components/Box'
import { Text } from 'components/Text'
import { FC } from 'react'
import { CardContainerStyled } from './styled'
import Image from 'next/image'
import { StarRating } from 'components/StarRating'
import { Favorite } from 'components/Favorite'
import { useDispatch, useSelector } from 'react-redux'
import { getFavorites } from 'store/selectors'
import { addToFavorites, removeFavoriteItem } from 'store/slice'

const Card: FC<IProduct> = ({
  _id,
  seller,
  skus,
  images = [],
  title,
  reviews,
}) => {
  const favorites = useSelector(getFavorites)
  const dispatch = useDispatch()
  const { price, sku } = skus[0]
  const { count, average } = reviews || {}

  const hasFavorited = favorites.find((item) => item.sku.sku === sku)

  const onFavorite = (isFavorite: boolean) => {
    isFavorite
      ? dispatch(
          addToFavorites({ _id, seller, title, sku: skus[0], image: images[0] })
        )
      : dispatch(removeFavoriteItem({ sku }))
  }

  return (
    <CardContainerStyled>
      <Box height={350} position="relative">
        <Image
          src={images[0]}
          alt={title}
          placeholder="blur"
          blurDataURL="https://via.placeholder.com/5"
          layout="fill"
        />
        <Favorite
          isFavorite={!!hasFavorited}
          onFavorite={onFavorite}
          iconColor="rose.400"
          position="absolute"
          top={5}
          right={5}
        />
      </Box>
      <Box p={10}>
        <Box height={32} mb={5}>
          <Text fontSize={14} color="gray.400" multiLineTextOverflow>
            {title}
          </Text>
        </Box>
        <Box display="flex" alignItems="center" mb={3}>
          <StarRating rate={average} size={14} disabled />
          {!!count && (
            <Text ml={1} fontSize={10} color="gray.400">
              ({count})
            </Text>
          )}
        </Box>
        <Text fontSize={16} fontWeight="bold" color="primary.400">
          $ {price}
        </Text>
      </Box>
    </CardContainerStyled>
  )
}

export { Card }
