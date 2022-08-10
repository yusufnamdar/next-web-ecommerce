import Box from 'components/Box'
import Text from 'components/Text'
import SearchInput from './SearchInput'
import { NavStyled } from './styled'

const Navbar = () => {
  return (
    <NavStyled>
      <Box
        display="flex"
        // justifyContent="space-between"
        alignItems="center"
        mx="auto"
        maxWidth={1200}
      >
        <Text
          fontFamily="bahaianita"
          fontWeight="semi-bold"
          color="slate.100"
          fontSize={48}
          letterSpacing={3}
          lineHeight={1}
        >
          NAMSTORE
        </Text>
        <SearchInput />
      </Box>
    </NavStyled>
  )
}

export default Navbar
