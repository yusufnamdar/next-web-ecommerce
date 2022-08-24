import { FC } from 'react'
import { SkuOptionStyled, SkuOptionStyledProps } from './styled'

const SkuOption: FC<SkuOptionStyledProps> = ({
  isActive = false,
  isOutOfStock = false,
  ...props
}) => {
  return (
    <SkuOptionStyled
      isActive={isActive}
      isOutOfStock={isOutOfStock}
      {...props}
    />
  )
}

export default SkuOption
