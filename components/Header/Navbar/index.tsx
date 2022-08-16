import { Box } from 'components/Box'
import { Text } from 'components/Text'
import { NavStyled } from './styled'
import Searchbar from './Searchbar'
import Toolbar from './Toolbar'

const Navbar = () => {
  return (
    <NavStyled>
      <Box
        height={64}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mx="auto"
        maxWidth={1200}
      >
        <Text
          fontFamily="bahaianita"
          fontWeight="semi-bold"
          color="teal.300"
          fontSize={48}
          letterSpacing={3}
          lineHeight={1}
        >
          NAM<span className="primary-color">STORE</span>
        </Text>
        <Searchbar />
        <Toolbar />
      </Box>
    </NavStyled>
  )
}

export default Navbar
