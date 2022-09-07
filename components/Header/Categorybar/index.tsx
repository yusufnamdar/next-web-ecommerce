import { Box } from 'components/Box'
import { Text } from 'components/Text'
import { IRoute, routeList } from 'routeList'
import { useState } from 'react'
import Category from './Category'
import Menu from './Menu'
import { OverlayStyled } from './Menu/styled'

let timeout: any

const clear = () => {
  clearTimeout(timeout)
  timeout = undefined
}

const Categorybar = () => {
  const [activeMenu, setActiveMenu] = useState<IRoute | undefined>()

  const toggleMenu = (menu?: IRoute) => {
    //If there is already a settimeout, clear the timeout first.
    if (timeout) {
      clear()
    }
    //Cancel openning the menu by clearing the timeout and early return
    if (!activeMenu && !menu) {
      return
    }
    //When closing the menu, set the timeout  with 200ms, so there is enough time to cancel the closing by re-entering via onMouseEnter
    if (!menu) {
      timeout = setTimeout(() => {
        setActiveMenu(menu)
      }, 200)
      return
    }
    //If there is an already expanded menu, expand the new menu without using the settimeout.
    if (activeMenu) {
      setActiveMenu(menu)
      return
    }
    //When first hovered on a category, set the timeout with 200ms.
    timeout = setTimeout(() => {
      setActiveMenu(menu)
    }, 300)
  }

  //Close the menu without 200ms delay for route changes
  const closeMenu = () => {
    setActiveMenu(undefined)
  }

  return (
    <>
      <Box
        onMouseLeave={toggleMenu.bind(null, undefined)}
        onMouseEnter={clear} //with onMouseOver, when hovering on child category comp. this clear function executes every time, that is why onMouseEnter is used.
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
                onMouseEnter={toggleMenu.bind(null, item)}
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
        <Menu activeMenu={activeMenu} closeMenu={closeMenu} />
      </Box>
      <OverlayStyled isExpanded={!!activeMenu} />
    </>
  )
}

export default Categorybar
