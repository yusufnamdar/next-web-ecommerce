 import { FC, ReactNode } from 'react'
import { BoxStyled, BoxStyledProps } from './styled'

interface BoxProps extends BoxStyledProps {
  color?: string // this needs to be explicit, otherwise it gives overload error
  hidden?: boolean
  children?: ReactNode
}

const Box: FC<BoxProps> = ({ hidden = false, ...props }) => {
  if (hidden) return null

  return <BoxStyled {...props} />
}

export default Box
