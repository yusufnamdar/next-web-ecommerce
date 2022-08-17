import { Box } from 'components/Box'
import { Text } from 'components/Text'
import { IRoute, routeList } from 'routeList'
import { useState } from 'react'
import Category from './Category'
import Menu from './Menu'

const Categorybar = () => {
  const [activeMenu, setActiveMenu] = useState<IRoute | undefined>()

  const toggleMenu = (menu?: IRoute) => {
    setActiveMenu(menu)
  }

  return (
    <Box
      display="flex"
      onMouseLeave={toggleMenu.bind(null, undefined)}
      mx="auto"
      maxWidth={1200}
      position="relative"
    >
      <Box display="flex" className="no-scrollbar" gap={44} overflowX="auto">
        {routeList.map((item) => {
          const { menuId, icon, color, title } = item
          const isExpanded = menuId === activeMenu?.menuId

          return (
            <Category
              key={menuId}
              iconName={icon}
              bg={color}
              onMouseOver={toggleMenu.bind(null, item)}
              isExpanded={isExpanded}
            >
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
      <Menu activeMenu={activeMenu} />
    </Box>
  )
}

export default Categorybar
