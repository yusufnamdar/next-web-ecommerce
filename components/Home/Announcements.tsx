import { Box, BoxProps } from 'components/Box'
import { FC, useState, useEffect } from 'react'
import Image from 'next/image'
import {
  AnnouncementContainerStyled,
  AnnouncementStyled,
  SlideStyled,
} from './styled'

const announcements = [
  {
    id: 1,
    backgroundImage: '/volf.jpg',
    image: '/t-shirt.jpg',
    alt: 'man-walking',
  },
  {
    id: 2,
    backgroundImage: '/white-wood.jpg',
    image: '/pants.jpg',
    alt: 'women-pants',
    position: '0 -320px',
  },
  {
    id: 3,
    backgroundImage: '/blue-wood.jpg',
    image: '/rene.jpg',
    alt: 'man-with-suit',
    position: 'top',
  },
  {
    id: 4,
    backgroundImage: '/brown-wood.jpg',
    image: '/sneakers.jpg',
    alt: 'red-shoe',
    position: '0 -300px',
  },
]

interface AnnouncementProps extends Omit<BoxProps, 'height'> {
  height?: number
}

const Announcements: FC<AnnouncementProps> = ({ height, ...props }) => {
  const [active, setActive] = useState(1)

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev === announcements.length ? 1 : prev + 1))
    }, 6000)
    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <Box display="flex" alignItems="flex-end" height={height} {...props}>
      {announcements.map((item) => {
        return (
          <AnnouncementContainerStyled
            key={item.id}
            height={height}
            isActive={item.id === active}
          >
            <Image
              src={item.backgroundImage}
              alt={item.alt}
              layout="fill"
              objectFit="cover"
            />
            <AnnouncementStyled>
              <Image
                src={item.image}
                alt={item.alt}
                layout="fill"
                objectFit="cover"
                objectPosition={item.position}
              />
            </AnnouncementStyled>
          </AnnouncementContainerStyled>
        )
      })}
      <Box display="flex" width={1} justifyContent="center" pb={16} gap={16}>
        {announcements.map((item) => {
          return (
            <SlideStyled
              key={item.id}
              isActive={item.id === active}
              onClick={() => setActive(item.id)}
            >
              <Image
                src={item.image}
                alt={item.alt}
                layout="fill"
                objectFit="cover"
              />
            </SlideStyled>
          )
        })}
      </Box>
    </Box>
  )
}

export default Announcements
