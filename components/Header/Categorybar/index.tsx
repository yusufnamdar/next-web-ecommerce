import { Box } from 'components/Box'
import { Text } from 'components/Text'
import { Category } from './Category'
import { routeList } from 'routeList'

const Categorybar = () => {
  return (
    <Box
      display="flex"
      position="relative"
      pt={16}
      mx="auto"
      maxWidth={1200}
      gap={44}
      className="no-scrollbar"
      overflowX="auto"
    >
      {routeList.map(({ menuId, icon, color, title }) => {
        return (
          <Category key={menuId} iconName={icon} bg={color}>
            <Text
              color="gray.400"
              textAlign="center"
              fontWeight="semi-bold"
              fontSize={12}
            >
              {title}
            </Text>
          </Category>
        )
      })}
    </Box>
  )
}

export default Categorybar
