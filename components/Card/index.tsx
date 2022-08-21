import { Box } from 'components/Box'
import { Text } from 'components/Text'
import { FC } from 'react'
import { CardContainerStyled } from './styled'
import Image from 'next/image'
import Favorite from './Favorite'
import { StarRating } from 'components/StarRating'

const Card: FC<IProduct> = ({ skus, images = [], title, reviews }) => {
  const price = skus[0].price
  const { count, average } = reviews || {}
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
        <Favorite />
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
