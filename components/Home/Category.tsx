import { Icon } from 'components/Icon'
import { FC, ReactNode } from 'react'
import {
  CategoryContainerStyled,
  CategoryContainerStyledProps,
  CircleStyled,
} from './styled'

interface CategoryProps extends CategoryContainerStyledProps {
  children?: ReactNode
}

const Category: FC<CategoryProps> = ({ children, bg }) => {
  return (
    <CategoryContainerStyled bg={bg}>
      <CircleStyled bg={bg}>
        <Icon name="dry_cleaning" size={30} color="gray.400" />
      </CircleStyled>
      {children}
    </CategoryContainerStyled>
  )
}

export { Category }
