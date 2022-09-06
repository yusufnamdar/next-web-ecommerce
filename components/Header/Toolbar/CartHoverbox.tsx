import { Hoverbox } from 'components/Hoverbox'
import { Icon } from 'components/Icon'
import { Text } from 'components/Text'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { getCart } from 'store/selectors'
import Cart from './Cart'

const CartHoverbox = () => {
  const items = useSelector(getCart)
  const [isVisible, setIsVisible] = useState(false)
  const router = useRouter()
  const isMounted = useRef(false) //used for skipping the setIsVisible hook inside the useEffect during the initial render

  useEffect(() => {
    if (isMounted.current) {
      setIsVisible(true) //Make the cart hover box visible, everytime the cart items are changed
    }
  }, [items])

  useEffect(() => {
    setIsVisible(false) //Make the cart hover box invisible, when the page is changed
  }, [router.asPath])

  useEffect(() => {
    isMounted.current = true
  }, [])

  const toggleVisibility = (visible: boolean) => {
    setIsVisible(visible)
  }

  return (
    <Hoverbox
      colorOnHover="#fbbf24"
      variant="arrowBottomRight"
      isVisible={isVisible}
      width={300}
      content={<Cart items={items} />}
      toggleVisibility={toggleVisibility}
      controlVisibility
    >
      <Icon name="shopping_cart" color="white" />
      <Text ml={1} color="white" fontSize={13} fontWeight="semi-bold">
        Cart
      </Text>
    </Hoverbox>
  )
}

export default CartHoverbox
