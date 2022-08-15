import { Box } from 'components/Box'
import { Text } from 'components/Text'
import { Category } from 'components/Home/Category'
import type { NextPage } from 'next'

const HomePage: NextPage = () => {
  return (
    <Box bg="body" px={16} borderBottom="2px solid black">
      <Box
        display="flex"
        pt={16}
        mx="auto"
        maxWidth={1200}
        gap={44}
        className="no-scrollbar"
        overflowX="auto"
      >
        <Category iconName="dry_cleaning" bg="emerald.300">
          <Text
            color="gray.400"
            textAlign="center"
            fontWeight="semi-bold"
            fontSize={12}
          >
            Clothing
          </Text>
        </Category>
        <Category iconName="sports_esports" bg="teal.300">
          <Text
            color="gray.400"
            textAlign="center"
            fontWeight="semi-bold"
            fontSize={12}
          >
            Work in Progress
          </Text>
        </Category>
        <Category iconName="computer" bg="cyan.300">
          <Text
            color="gray.400"
            textAlign="center"
            fontWeight="semi-bold"
            fontSize={12}
          >
            Work in Progress
          </Text>
        </Category>
        <Category iconName="restaurant" bg="rose.300">
          <Text
            color="gray.400"
            textAlign="center"
            fontWeight="semi-bold"
            fontSize={12}
          >
            Work in Progress
          </Text>
        </Category>
        <Category iconName="pets" bg="primary.300">
          <Text
            color="gray.400"
            textAlign="center"
            fontWeight="semi-bold"
            fontSize={12}
          >
            Work in Progress
          </Text>
        </Category>
        <Category iconName="sports_basketball" bg="fuschsia.300">
          <Text
            color="gray.400"
            textAlign="center"
            fontWeight="semi-bold"
            fontSize={12}
          >
            Work in Progress
          </Text>
        </Category>
        <Category iconName="new_releases" bg="white">
          <Text
            color="gray.400"
            textAlign="center"
            fontWeight="semi-bold"
            fontSize={12}
          >
            Work in Progress
          </Text>
        </Category>
        <Category iconName="new_releases" bg="white">
          <Text
            color="gray.400"
            textAlign="center"
            fontWeight="semi-bold"
            fontSize={12}
          >
            Work in Progress
          </Text>
        </Category>
        <Category iconName="new_releases" bg="white">
          <Text
            color="gray.400"
            textAlign="center"
            fontWeight="semi-bold"
            fontSize={12}
          >
            Work in Progress
          </Text>
        </Category>
        <Category iconName="new_releases" bg="white">
          <Text
            color="gray.400"
            textAlign="center"
            fontWeight="semi-bold"
            fontSize={12}
          >
            Work in Progress
          </Text>
        </Category>
        <Category iconName="new_releases" bg="white">
          <Text
            color="gray.400"
            textAlign="center"
            fontWeight="semi-bold"
            fontSize={12}
          >
            Work in Progress
          </Text>
        </Category>
      </Box>
    </Box>
  )
}

export default HomePage
