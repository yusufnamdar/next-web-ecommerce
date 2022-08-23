import { FC, ReactNode } from 'react'
import { OptionStyled, OptionStyledProps } from './styled'

interface OptionProps extends OptionStyledProps {
  children?: ReactNode
}

const Option: FC<OptionProps> = ({ children, isActive = false }) => {
  return <OptionStyled isActive={isActive}>{children}</OptionStyled>
}

export default Option
