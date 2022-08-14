import { FC, HTMLAttributes } from 'react'
import { IconStyled, IconStyledProps } from './styled'

interface IconProps extends IconStyledProps, HTMLAttributes<HTMLSpanElement> {
  name: string
  size?: number
  outlined?: boolean
  color?: string //this needs to be explicit, otherwise it gives overload error
}

const Icon: FC<IconProps> = ({
  name,
  size = 24,
  color,
  outlined,
  cursor,
  ...props
}) => {
  const cs = outlined ? 'material-icons-outlined' : 'material-icons'
  return (
    <IconStyled
      className={cs}
      fontSize={size}
      color={color}
      cursor={cursor}
      {...props}
    >
      {name}
    </IconStyled>
  )
}

export { Icon }
