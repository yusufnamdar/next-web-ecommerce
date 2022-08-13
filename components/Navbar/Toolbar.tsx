import { Box } from 'components/Box'
import { Icon } from 'components/Icon'
import { Text } from 'components/Text'
import { ToolContainerStyled } from './styled'
import { Button } from 'components/Button'
import Menu from './Menu'

const Toolbar = () => {
  return (
    <Box height="100%" display="flex" justifyContent="space-between" gap={30}>
      <ToolContainerStyled onHoverIconColor="#2dd4bf">
        <Icon name="person" color="white" />
        <Text ml={1} color="white" fontSize={13} fontWeight="semi-bold">
          Login
        </Text>
        <Menu width={200} variant="bottomCenter">
          <Box p={16}>
            <Button variant="fill" width={1} height={38} fontSize={12} mb={10}>
              Log in
            </Button>
            <Button variant="outline" width={1} height={38} fontSize={12}>
              Sign up
            </Button>
          </Box>
        </Menu>
      </ToolContainerStyled>
      <ToolContainerStyled onHoverIconColor="#fb7185">
        <Icon name="favorite" color="white" />
        <Text ml={1} color="white" fontSize={13} fontWeight="semi-bold">
          Favorites
        </Text>
      </ToolContainerStyled>
      <ToolContainerStyled onHoverIconColor="#fbbf24">
        <Icon name="shopping_cart" color="white" />
        <Text ml={1} color="white" fontSize={13} fontWeight="semi-bold">
          Cart
        </Text>
        <Menu width={300} variant="bottomRight">
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
        </Menu>
      </ToolContainerStyled>
    </Box>
  )
}

export default Toolbar
