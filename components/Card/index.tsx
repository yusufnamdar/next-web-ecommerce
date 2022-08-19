import { Box } from 'components/Box'
import { Text } from 'components/Text'
import { FC } from 'react'
import { CardContainerStyled } from './styled'
import Image from 'next/image'
import Favorite from './Favorite'

const Card: FC<IProduct> = ({ skus, images = [], title }) => {
  const price = skus[0].price
  return (
    <CardContainerStyled>
      <Box height={350} position="relative" mb={10}>
        <Image src={images[0]} layout="fill" />
        <Favorite />
      </Box>
      <Box p={10}>
        <Box height={32} mb={5}>
          <Text fontSize={14} color="gray.400" multiLineTextOverflow>
            {title}
          </Text>
        </Box>
        <Text fontSize={16} fontWeight="bold" color="primary.400">
          $ {price}
        </Text>
      </Box>
    </CardContainerStyled>
  )
}

export { Card }
