import { Box } from 'components/Box'
import { Text } from 'components/Text'
import { FC } from 'react'
import { IRoute } from 'routeList'
import { noop } from 'utils'
import MenuLink from './MenuLink'
import { MenuStyled } from './styled'

interface MenuProps {
  activeMenu?: IRoute
  closeMenu?(): void
}

const Menu: FC<MenuProps> = ({ activeMenu, closeMenu = noop }) => {
  const isExpanded = !!activeMenu

  const { title, subMenu } = activeMenu || {}
  return (
    <MenuStyled isExpanded={isExpanded}>
      <Text fontSize={20} fontWeight="bold" mb={16}>
        {title}
      </Text>
      <Box display="flex" gap={24}>
        {subMenu?.map(({ menuId, title, page = '', subMenu }) => {
          return (
            <Box key={menuId} pr={24}>
              <MenuLink variant="title" href={page} onClick={closeMenu} mb={3}>
                {title}
              </MenuLink>
              {subMenu?.map((item) => {
                return (
                  <MenuLink
                    key={item.menuId}
                    href={item.page || ''}
                    onClick={closeMenu}
                    mb={2}
                  >
                    {item.title}
                  </MenuLink>
                )
              })}
            </Box>
          )
        })}
      </Box>
    </MenuStyled>
  )
}

export default Menu
