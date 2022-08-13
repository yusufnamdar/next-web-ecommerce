import { Icon } from 'components/Icon'
import { FC, ReactNode } from 'react'
import { MenuStyledProps, MenuStyled } from './styled'

interface MenuProps extends MenuStyledProps {
  children?: ReactNode
}

const Menu: FC<MenuProps> = ({ children, ...props }) => {
  return (
    <MenuStyled className="toolbar-menu" {...props}>
      {children}
      <span>
        <Icon name="play_arrow" color="white" size={18} />
      </span>
    </MenuStyled>
  )
}

export default Menu
