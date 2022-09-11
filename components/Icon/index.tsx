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
  className,
  size = 24,
  outlined,
  ...props
}) => {
  const iconClass = outlined ? 'material-icons-outlined' : 'material-icons'
  const cs = className ? `${iconClass} ${className}` : iconClass
  return (
    <IconStyled className={cs} fontSize={size} {...props}>
      {name}
    </IconStyled>
  )
}

export { Icon }
