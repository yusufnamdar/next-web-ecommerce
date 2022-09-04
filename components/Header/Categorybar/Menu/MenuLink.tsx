import Link, { LinkProps } from 'next/link'
import { FC, ReactNode } from 'react'
import { MenuLinkStyled, MenuLinkStyledProps } from './styled'

interface MenuLinkProps extends LinkProps, MenuLinkStyledProps {
  children?: ReactNode
}

const MenuLink: FC<MenuLinkProps> = ({
  children,
  variant = 'regular',
  prefetch = false,
  mb,
  onClick,
  ...props
}) => {
  return (
    // Need to put passHref prop, so it does not hurt the site's accessibility and SEO
    <Link {...props} prefetch={prefetch} passHref>
      <MenuLinkStyled onClick={onClick} variant={variant} mb={mb}>
        {children}
      </MenuLinkStyled>
    </Link>
  )
}

export default MenuLink
