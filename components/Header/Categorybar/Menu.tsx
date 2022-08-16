import { Box } from 'components/Box'
import { Text } from 'components/Text'
import { FC } from 'react'
import { IRoute } from 'routeList'
import { MenuStyled } from './styled'

interface MenuProps {
  category: IRoute
}

const Menu: FC<MenuProps> = ({ category }) => {
  const { title, subMenu } = category
  return (
    <MenuStyled>
      <Text fontSize={20} fontWeight="bold" mb={16}>
        {title}
      </Text>
      <Box display="flex">
        {subMenu?.map(({ menuId, title }) => {
          return (
            <div key={menuId}>
              <Text>{title}</Text>
            </div>
          )
        })}
      </Box>
    </MenuStyled>
  )
}

export default Menu
