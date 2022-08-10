import { FC, HTMLAttributes, ReactNode } from 'react'
import { TextStyled, TextStyledProps } from './styled'

interface TextProps extends TextStyledProps, HTMLAttributes<HTMLDivElement> {
  children?: ReactNode
  color?: string //this needs to be explicit, otherwise it gives overload error
}

const Text: FC<TextProps> = (props) => {
  return <TextStyled {...props} />
}

export default Text
