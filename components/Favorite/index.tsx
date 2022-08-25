import { Icon } from 'components/Icon'
import { FC } from 'react'
import { noop } from 'utils'
import { FavoriteCircleStyled, FavoriteCircleStyledProps } from './styled'

interface FavoriteProps extends FavoriteCircleStyledProps {
  isFavorite?: boolean
  onFavorite?(b: boolean): void
  iconColor?: string
  iconSize?: number
}

const Favorite: FC<FavoriteProps> = ({
  isFavorite = false,
  onFavorite = noop,
  borderRadius = '50%',
  iconColor = 'gray.400',
  iconSize = 28,
  ...props
}) => {
  return (
    <FavoriteCircleStyled
      {...props}
      borderRadius={borderRadius}
      onClick={onFavorite.bind(null, !isFavorite)}
    >
      <Icon
        name={isFavorite ? 'favorite' : 'favorite_border'}
        color={iconColor}
        size={iconSize}
      />
    </FavoriteCircleStyled>
  )
}

export { Favorite }
