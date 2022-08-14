import { Box } from 'components/Box'
import type { NextPage } from 'next'

const HomePage: NextPage = () => {
  return (
    <Box bg="cyan.900">
      <Box display="flex" p={16} mx="auto" maxWidth={1200}>
        HOME PAGE
      </Box>
    </Box>
  )
}

export default HomePage
