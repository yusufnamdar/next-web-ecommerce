import { Box } from 'components/Box'
import { Panel } from 'components/Panel'
import { Text } from 'components/Text'
import Image from 'next/image'

const ErrorPage = () => {
  return (
    <Panel
      maxWidth={1000}
      mx="auto"
      display="flex"
      flexDirection="column"
      alignItems="center"
      p={16}
    >
      <Box p={16}>
        <Image src="/404.svg" width={305} height={200} />
      </Box>
      <Text mt={16} fontSize={30} fontWeight="semi-bold" color="gray.400">
        Page not found
      </Text>
    </Panel>
  )
}

export default ErrorPage
