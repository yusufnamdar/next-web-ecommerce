import { Icon } from 'components/Icon'
import React from 'react'
import { MenuStyled, ArrowStyled } from './styled'

const Menu = () => {
  return (
    <MenuStyled size={200} position="absolute" top="100%" right={0}>
      Menu
      <ArrowStyled>
        <Icon name="play_arrow" color="white" size={25} />
      </ArrowStyled>
    </MenuStyled>
  )
}

export default Menu
