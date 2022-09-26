import { Box } from 'components/Box'
import { Text } from 'components/Text'
import { FC, useEffect, useState } from 'react'
import { optionTextMap } from 'utils/constants'
import { Button } from 'components/Button'
import { Icon } from 'components/Icon'
import { SlideBoxStyled } from '../Header/Toolbar/styled'
import Router from 'next/router'
import Image from 'next/image'

interface CartProps {
  items: ICartItem[]
  totalQuantity: number
}

const Cart: FC<CartProps> = ({ items, totalQuantity }) => {
  const [showScrollDown, setShowScrollDown] = useState(false)
  const [showScrollUpwards, setShowScrollUpwards] = useState(false)

  useEffect(() => {
    const boxRef = document.querySelector('.cart-box')
    const clientHeight = boxRef?.clientHeight || 0
    const scrollHeight = boxRef?.scrollHeight || 0
    if (scrollHeight > clientHeight) {
      boxRef?.scrollTo({ top: 0 })
      setShowScrollDown(true)
      setShowScrollUpwards(false)
    } else {
      setShowScrollDown(false)
      setShowScrollUpwards(false)
    }
  }, [items.length])

  if (!totalQuantity) {
    return (
      <Box p={16}>
        <Text
          textAlign="center"
          color="gray.400"
          fontSize={12}
          fontWeight="semi-bold"
        >
          Your cart is empty.
        </Text>
      </Box>
    )
  }

  const handleScrollDown = () => {
    const boxRef = document.querySelector('.cart-box')
    const scrollTop = boxRef?.scrollTop || 0
    const scrollHeight = boxRef?.scrollHeight || 0
    const clientHeight = boxRef?.clientHeight || 0

    //Handle scroll down via quick clicking
    const top =
      scrollTop % 118 === 0 ? 118 : 118 + 118 - ((scrollTop / 118) % 1) * 118

    boxRef?.scrollBy({ top, behavior: 'smooth' })
    //scrollTop + clientHeight + 118(item box) === scrollHeight => true
    if (scrollTop + clientHeight + 118 > scrollHeight - 118) {
      setShowScrollDown(false)
    }
    setShowScrollUpwards(true)
  }

  const handleScrollUpwards = () => {
    const boxRef = document.querySelector('.cart-box')
    const scrollTop = boxRef?.scrollTop || 0
    const clientHeight = boxRef?.clientHeight || 0

    //Handle scroll up via quick clicking
    const top =
      scrollTop % 118 === 0 ? -118 : -118 - ((scrollTop / 118) % 1) * 118

    boxRef?.scrollBy({ top, behavior: 'smooth' })
    if (scrollTop < clientHeight) {
      setShowScrollUpwards(false)
    }
    setShowScrollDown(true)
  }

  const handleNavigation = (route: string) => () => {
    Router.push(route)
  }

  return (
    <>
      <Box hidden={showScrollUpwards}>
        <Text className="no-user-select" pl={16} pt={16} fontSize={14}>
          Shopping Cart ({totalQuantity} Item{totalQuantity > 1 ? 's' : ''})
        </Text>
      </Box>
      <SlideBoxStyled
        className="no-user-select"
        hidden={!showScrollUpwards}
        onClick={handleScrollUpwards}
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
        {items.map((item, index) => {
          const { _id, sku, optionType, title, image, quantity } = item
          return (
            <Box
              key={sku.sku}
              onClick={handleNavigation(`/product/${_id}`)}
              className="no-user-select pointer"
              display="flex"
              p={16}
              height={118}
              borderBottomStyle={index !== items.length - 1 ? 'solid' : 'none'}
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
      <Box
        height={32}
        hidden={items.length <= 2}
        borderBottomStyle="solid"
        borderBottomWidth={1}
        borderBottomColor="gray.200"
      >
        <SlideBoxStyled
          className="no-user-select"
          hidden={!showScrollDown}
          onClick={handleScrollDown}
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100%"
        >
          <Icon name="expand_more" color="gray.400" size={30} />
        </SlideBoxStyled>
      </Box>
      <Box display="flex" justifyContent="space-between" px={16} py={10}>
        <Button
          onClick={handleNavigation('/cart')}
          width={130}
          height={35}
          fontSize={14}
        >
          Go to cart
        </Button>
        <Button variant="outline" width={130} height={35} fontSize={14}>
          Check out
        </Button>
      </Box>
    </>
  )
}

export { Cart }
