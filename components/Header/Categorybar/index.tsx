import { Box } from 'components/Box'
import { Text } from 'components/Text'
import { IRoute, routeList } from 'routeList'
import { useState } from 'react'
import Category from './Category'
import Menu from './Menu'

let timer: any

const clear = () => {
  clearTimeout(timer)
  timer = undefined
}

const Categorybar = () => {
  const [activeMenu, setActiveMenu] = useState<IRoute | undefined>()

  const toggleMenu = (menu?: IRoute) => {
    //if there is an expanded menu, expand the new menu without using settimeout.
    if (activeMenu) {
      clear()
      setActiveMenu(menu)
      return
    }
    //if there is already a settimeout, clear the timeout first.
    if (timer) {
      clear()
    }
    //when first hovered on a category, set the timeout with 200ms.
    timer = setTimeout(() => {
      setActiveMenu(menu)
    }, 200)
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
