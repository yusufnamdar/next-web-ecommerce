import { Box } from 'components/Box'
import { Hoverbox } from 'components/Hoverbox'
import { Icon } from 'components/Icon'
import { Text } from 'components/Text'
import { useRouter } from 'next/router'
import { useEffect, useMemo, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { getCart, getHydrate } from 'store/selectors'
import { Cart } from 'components/Cart'

const CartHoverbox = () => {
  const items = useSelector(getCart)
  const hasHydrated = useSelector(getHydrate)
  const [isVisible, setIsVisible] = useState(false)
  const isMounted = useRef(false)
  const router = useRouter()

  const isCartPage = router.pathname === '/cart'

  //if the array is empty, it returns 0
  const totalQuantity = useMemo(
    () =>
      items.reduce((accumulator, current) => {
        return accumulator + current.quantity
      }, 0),
    [items]
  )

  useEffect(() => {
    if (isMounted.current && !isCartPage) {
      setIsVisible(true) //Make the cart hover box visible, everytime the cart items are changed
    }
  }, [items])

  useEffect(() => {
    isMounted.current = hasHydrated //used for skipping the setIsVisible hook inside the useEffect during redux store hydration
  }, [hasHydrated])

  useEffect(() => {
    setIsVisible(false) //Make the cart hover box invisible, when the page is changed
  }, [router.asPath])

  const toggleVisibility = (visible: boolean) => {
    setIsVisible(visible)
  }

  return (
    <Hoverbox
      colorOnHover="#fbbf24"
      variant="arrowBottomRight"
      isVisible={isVisible}
      width={300}
      content={
        !isCartPage && <Cart items={items} totalQuantity={totalQuantity} />
      }
      toggleVisibility={toggleVisibility}
      controlVisibility
    >
      <Icon name="shopping_cart" color="white" />
      <Text ml={1} color="white" fontSize={13} fontWeight="semi-bold">
        Cart
      </Text>
      <Box
        hidden={!totalQuantity || isCartPage}
        position="absolute"
        top={12}
        left="3px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        width={18}
        height={18}
        borderRadius="50%"
        bg="teal.600"
      >
        <Text fontSize={11} fontWeight="semi-bold" color="white">
          {totalQuantity}
        </Text>
      </Box>
    </Hoverbox>
  )
}

export default CartHoverbox
