import Box from 'components/Box'
import Icon from 'components/Icon'
import Text from 'components/Text'
import Menu from './Menu'
import { ToolContainerStyled } from './styled'

const Toolbar = () => {
  return (
    <Box height="100%" display="flex" justifyContent="space-between" gap={10}>
      <ToolContainerStyled onHoverIconColor="#2dd4bf" px={8}>
        <Icon name="person" color="white" />
        <Text ml={1} color="white" fontSize={13} fontWeight="semi-bold">
          Login
        </Text>
      </ToolContainerStyled>
      <ToolContainerStyled onHoverIconColor="#fb7185" px={8}>
        <Icon name="favorite" color="white" />
        <Text ml={1} color="white" fontSize={13} fontWeight="semi-bold">
          Favorites
        </Text>
      </ToolContainerStyled>
      <ToolContainerStyled onHoverIconColor="#fbbf24" px={8}>
        <Icon name="shopping_cart" color="white" />
        <Text ml={1} color="white" fontSize={13} fontWeight="semi-bold">
          Cart
        </Text>
      </ToolContainerStyled>
    </Box>
  )
}

export default Toolbar
