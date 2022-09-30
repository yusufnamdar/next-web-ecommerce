import { Box } from 'components/Box'
import { Icon } from 'components/Icon'
import { Text } from 'components/Text'
import { Button } from 'components/Button'
import { Hoverbox } from 'components/Hoverbox'
import CartHoverbox from './CartHoverbox'
import Router from 'next/router'

const Toolbar = () => {
  return (
    <Box height="100%" display="flex" justifyContent="space-between" gap={30}>
      <Hoverbox
        colorOnHover="#2dd4bf"
        variant="arrowBottomCenter"
        width={200}
        content={
          <Box p={16}>
            <Button variant="fill" width={1} height={38} fontSize={12} mb={10}>
              Log in
            </Button>
            <Button variant="outline" width={1} height={38} fontSize={12}>
              Sign up
            </Button>
          </Box>
        }
      >
        <Icon name="person" color="white" />
        <Text ml={1} color="white" fontSize={13} fontWeight="semi-bold">
          Login
        </Text>
      </Hoverbox>
      <Hoverbox
        colorOnHover="#fb7185"
        onClick={() => Router.push('/favorites')}
      >
        <Icon name="favorite" color="white" />
        <Text ml={1} color="white" fontSize={13} fontWeight="semi-bold">
          Favorites
        </Text>
      </Hoverbox>
      <CartHoverbox />
    </Box>
  )
}

export default Toolbar
