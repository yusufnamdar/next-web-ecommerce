import { Box } from 'components/Box'
import { Text } from 'components/Text'
import Categorybar from './Categorybar'
import Searchbar from './Searchbar'
import Toolbar from './Toolbar'

const Header = () => {
  return (
    <header>
      <nav>
        <Box px={16} bg="cyan.1000">
          <Box
            height={64}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            maxWidth={1200}
            mx="auto"
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
        </Box>
        <Box bg="body" px={16} borderBottom="2px solid black">
          <Categorybar />
        </Box>
      </nav>
    </header>
  )
}

export default Header
