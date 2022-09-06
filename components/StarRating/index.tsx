import { Box, BoxProps } from 'components/Box'
import { Icon } from 'components/Icon'
import { FC, useEffect, useRef, useState } from 'react'
import { noop } from 'utils'

interface StarRatingProps extends BoxProps {
  rate?: number
  onRating?(rate: number): void
  disabled?: boolean
  size?: number
}

const StarRating: FC<StarRatingProps> = ({
  rate = 0,
  onRating = noop,
  disabled = false,
  size = 24,
}) => {
  const [activeStars, setActiveStars] = useState(rate)
  const isRated = useRef(false) //used for checking whether the rating is done via click event, if it is, onMouseLeave doesn't reset activeStars state

  useEffect(() => {
    setActiveStars(rate)
  }, [rate])

  const handleMouseOver = (index: number) => {
    setActiveStars(index + 1)
  }

  const handleMouseLeave = () => {
    if (isRated.current) {
      isRated.current = false
      return
    }
    setActiveStars(0)
  }

  const handleClick = (index: number) => {
    isRated.current = true
    onRating(index + 1)
  }

  if (disabled) {
    return (
      <Box display="flex">
        {[...Array(5)].map((arr, index) => {
          const starWidth =
            Math.floor(activeStars) > index
              ? 1
              : activeStars <= index
              ? 0
              : activeStars - index

          return (
            <Box key={index} position="relative">
              <Box
                display="flex"
                position="absolute"
                overflow="hidden"
                width={starWidth}
              >
                <Icon name="star" color="primary.400" size={size} />
              </Box>
              <Box display="flex">
                <Icon name="star_outline" color="primary.400" size={size} />
              </Box>
            </Box>
          )
        })}
      </Box>
    )
  }

  return (
    <Box display="flex" className="pointer" onMouseLeave={handleMouseLeave}>
      {[...Array(5)].map((arr, index) => {
        const starWidth =
          Math.floor(activeStars) > index
            ? 1
            : activeStars <= index
            ? 0
            : activeStars - index

        return (
          <Box
            key={index}
            position="relative"
            onMouseOver={handleMouseOver.bind(null, index)}
            onClick={handleClick.bind(null, index)}
          >
            <Box
              display="flex"
              position="absolute"
              overflow="hidden"
              width={starWidth}
            >
              <Icon name="star" color="primary.400" size={size} />
            </Box>
            <Box display="flex">
              <Icon name="star_outline" color="primary.400" size={size} />
            </Box>
          </Box>
        )
      })}
    </Box>
  )
}

export { StarRating }
