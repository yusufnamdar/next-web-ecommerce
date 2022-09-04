import { Hoverbox } from 'components/Hoverbox'
import { Icon } from 'components/Icon'
import { Text } from 'components/Text'
import { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { getCart } from 'store/selectors'
import Cart from './Cart'

const CartHoverbox = () => {
  const items = useSelector(getCart)
  const [isVisible, setIsVisible] = useState(false)
  const isMounted = useRef(false)

  useEffect(() => {
    if (isMounted) {
      setIsVisible(true)
    }
  }, [items])

  useEffect(() => {
    isMounted.current = true
  }, [])

  return (
    <Hoverbox
      colorOnHover="#fbbf24"
      variant="arrowBottomRight"
      width={300}
      isVisible={isVisible}
      onMouseLeave={() => setIsVisible(false)}
      content={<Cart items={items} />}
    >
      <Icon name="shopping_cart" color="white" />
      <Text ml={1} color="white" fontSize={13} fontWeight="semi-bold">
        Cart
      </Text>
    </Hoverbox>
  )
}

export default CartHoverbox
