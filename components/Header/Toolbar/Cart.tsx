import { Box } from 'components/Box'
import { Text } from 'components/Text'
import { FC, useEffect, useMemo, useState } from 'react'
import { optionTextMap } from 'utils/constants'
import { Button } from 'components/Button'
import Image from 'next/image'
import Router from 'next/router'
import { NextLink } from 'components/NextLink'
import { Icon } from 'components/Icon'
import { SlideBoxStyled } from './styled'

interface CartProps {
  items: ICartItem[]
}

const Cart: FC<CartProps> = ({ items }) => {
  const [showSlideDown, setShowSlideDown] = useState(false)
  const [showSlideUpwards, setShowSlideUpwards] = useState(false)

  const totalQuantity = useMemo(
    () =>
      items.reduce((accumulator, current) => {
        return accumulator + current.quantity
      }, 0),
    [items]
  )

  useEffect(() => {
    const boxRef = document.querySelector('.cart-box')
    const clientHeight = boxRef?.clientHeight || 0
    const scrollHeight = boxRef?.scrollHeight || 0
    if (scrollHeight > clientHeight) {
      setShowSlideDown(true)
    } else {
      setShowSlideDown(false)
    }
  }, [items.length])

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

  const handleSlideDown = () => {
    const boxRef = document.querySelector('.cart-box')
    boxRef?.scrollBy({ top: 120, behavior: 'smooth' })
    if (boxRef?.scrollTop === boxRef?.scrollHeight || 0 - 120) {
      setShowSlideDown(false)
    }
    setShowSlideUpwards(true)
  }

  const handleSlideUpwards = () => {
    const boxRef = document.querySelector('.cart-box')
    boxRef?.scrollBy({ top: -120, behavior: 'smooth' })
    if (boxRef?.scrollTop === 0) {
      setShowSlideUpwards(false)
    }
    setShowSlideDown(true)
  }

  const navigateToCart = () => {
    Router.push('/cart')
  }

  return (
    <>
      <Box hidden={showSlideUpwards}>
        <Text pl={16} pt={16} fontSize={14}>
          Shopping Cart ({totalQuantity} Item{totalQuantity > 1 ? 's' : ''})
        </Text>
      </Box>
      <SlideBoxStyled
        hidden={!showSlideUpwards}
        onClick={handleSlideUpwards}
        display="flex"
        justifyContent="center"
        alignItems="center"
        height={32}
        borderBottomStyle="solid"
        borderBottomWidth={1}
        borderBottomColor="gray.200"
      >
        <Icon name="expand_less" color="gray.400" size={30} />
      </SlideBoxStyled>
      <Box className="cart-box" maxHeight={236} overflow="hidden">
        {items.map((item) => {
          const { _id, sku, optionType, title, image, quantity } = item
          return (
            <NextLink key={_id} href={`/product/${_id}`}>
              <Box
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
                  <Text
                    color="primary.400"
                    fontWeight="semi-bold"
                    fontSize={14}
                  >
                    $ {sku.price}
                  </Text>
                </Box>
              </Box>
            </NextLink>
          )
        })}
      </Box>
      <SlideBoxStyled
        hidden={!showSlideDown}
        onClick={handleSlideDown}
        display="flex"
        justifyContent="center"
        alignItems="center"
        height={32}
        borderBottomStyle="solid"
        borderBottomWidth={1}
        borderBottomColor="gray.200"
      >
        <Icon name="expand_more" color="gray.400" size={30} />
      </SlideBoxStyled>
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
