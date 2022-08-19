import { Icon } from 'components/Icon'
import { FC, ReactNode } from 'react'
import {
  CategoryContainerStyled,
  CategoryContainerStyledProps,
  CategoryCircleStyled,
} from './styled'

interface CategoryProps extends CategoryContainerStyledProps {
  children?: ReactNode
  iconName?: string
}

const Category: FC<CategoryProps> = ({
  iconName = 'new_releases',
  children,
  bg,
  ...props
}) => {
  return (
    <CategoryContainerStyled bg={bg} {...props}>
      <CategoryCircleStyled bg={bg}>
        <Icon name={iconName} size={30} color="gray.400" />
      </CategoryCircleStyled>
      {children}
    </CategoryContainerStyled>
  )
}

export default Category
