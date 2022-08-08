import { FC } from 'react'
import { TextStyled, TextStyledProps } from './styled'

interface TextProps extends TextStyledProps {
  children?: React.ReactNode
  color?: string
}

const Text: FC<TextProps> = (props) => {
  return <TextStyled {...props} />
}

export { Text }
