import { Box } from 'components/Box'
import { Text } from 'components/Text'
import { FC, useMemo } from 'react'
import { optionTextMap } from 'utils/constants'
import { Button } from 'components/Button'
import Image from 'next/image'
import Router from 'next/router'

interface CartProps {
  items: ICartItem[]
}

const Cart: FC<CartProps> = ({ items }) => {
  const totalQuantity = useMemo(
    () =>
      items.reduce((accumulator, current) => {
        return accumulator + current.quantity
      }, 0),
    [items]
  )

  if (!items.length) {
    return (
      <Box p={16}>
        <Text
          textAlign="center"
          color="gray.400"
          fontSize={12}
          fontWeight="semi-bold"
        >
          Your bag is empty.
        </Text>
      </Box>
    )
  }

  const navigateToCart = () => {
    Router.push('/cart')
  }

  return (
    <>
      <Text
        pl={16}
        pt={16}
        fontWeight="semi-bold"
        color="gray.400"
        fontSize={14}
      >
        Shopping Cart ({totalQuantity} Item{totalQuantity > 1 ? 's' : ''})
      </Text>
      <Box maxHeight={236} overflow="hidden">
        {items.map((item) => {
          const { _id, sku, optionType, title, image, quantity } = item
          return (
            <Box
              key={_id}
              display="flex"
              p={16}
              borderBottomStyle="solid"
              borderBottomWidth={1}
              borderBottomColor="gray.200"
            >
              <Box
                position="relative"
                width={58}
                minWidth={58}
                height={84}
                borderRadius="large"
                overflow="hidden"
                mr={15}
              >
                <Image
                  src={image}
                  alt={title}
                  placeholder="blur"
                  blurDataURL="https://via.placeholder.com/5"
                  layout="fill"
                />
              </Box>
              <Box>
                <Box maxHeight={40} mb={2}>
                  <Text fontSize={14} lineHeight={1.5} multiLineTextOverflow>
                    {title}
                  </Text>
                </Box>
                <Text
                  className="capitalize"
                  fontSize={11}
                  color="gray.400"
                  mb={2}
                >
                  {optionType &&
                    `${optionType}: ${
                      optionTextMap[sku[optionType] as OptionValueType]
                    },`}{' '}
                  Quantity: {quantity}
                </Text>
                <Text color="primary.400" fontWeight="semi-bold" fontSize={14}>
                  $ {sku.price}
                </Text>
              </Box>
            </Box>
          )
        })}
      </Box>
      <Box display="flex" justifyContent="space-between" px={16} py={10}>
        <Button onClick={navigateToCart} width={130} height={35} fontSize={14}>
          Go to cart
        </Button>
        <Button variant="outline" width={130} height={35} fontSize={14}>
          Check out
        </Button>
      </Box>
    </>
  )
}

export default Cart
