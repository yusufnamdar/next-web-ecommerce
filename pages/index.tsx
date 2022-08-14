import { Box } from 'components/Box'
import { Text } from 'components/Text'
import { Category } from 'components/Home/Category'
import type { NextPage } from 'next'

const HomePage: NextPage = () => {
  return (
    <Box bg="body" px={24}>
      <Box display="flex" pt={16} mx="auto" maxWidth={1200} gap={44}>
        <Category bg="emerald.300">
          <Text
            color="gray.400"
            textAlign="center"
            fontWeight="semi-bold"
            fontSize={12}
            mt={2}
          >
            Clothing
          </Text>
        </Category>
      </Box>
    </Box>
  )
}

export default HomePage
