import { Box, BoxProps } from 'components/Box'
import { FC, useState, useEffect } from 'react'
import Image from 'next/image'
import { Text } from 'components/Text'
import { NextLink } from 'components/NextLink'
import { Button } from 'components/Button'
import {
  AnnouncementContainerStyled,
  AnnouncementStyled,
  SlideStyled,
} from './styled'

const announcements = [
  {
    id: 1,
    title: "Men's T-Shirts on Sale",
    href: '/products?gender=men&category=t-shirts',
    backgroundImage: '/volf.jpg',
    image: '/t-shirt.jpg',
    alt: 'man-walking',
  },
  {
    id: 2,
    title: "Women's Pants on Sale",
    href: '/products?gender=women&category=pants',
    backgroundImage: '/white-wood.jpg',
    image: '/pants.jpg',
    alt: 'women-pants',
  },
  {
    id: 3,
    title: "Men's Suits on Sale",
    href: '/products?gender=men&category=t-shirts',
    backgroundImage: '/blue-wood.jpg',
    image: '/rene.jpg',
    alt: 'man-with-suit',
    position: 'top',
  },
  {
    id: 4,
    title: "Women's Sneakers on Sale",
    href: '/products?gender=women&category=sneakers',
    backgroundImage: '/brown-wood.jpg',
    image: '/sneakers.jpg',
    alt: 'red-shoe',
  },
]

interface AnnouncementProps extends Omit<BoxProps, 'height'> {
  height?: number
}

let timer: any

const Announcements: FC<AnnouncementProps> = ({ height, ...props }) => {
  const [active, setActive] = useState(1)

  useEffect(() => {
    startTimer()
    return () => {
      clearInterval(timer)
    }
  }, [])

  const stopTimer = () => {
    clearInterval(timer)
  }

  const startTimer = () => {
    timer = setInterval(() => {
      setActive((prev) => (prev === announcements.length ? 1 : prev + 1))
    }, 4000)
  }

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="flex-end"
      height={height}
      {...props}
    >
      {announcements.map((item) => {
        return (
          <AnnouncementContainerStyled
            key={item.id}
            height={height}
            isActive={item.id === active}
          >
            <Image
              src={item.backgroundImage}
              alt={item.backgroundImage}
              layout="fill"
            />
            <AnnouncementStyled
              onMouseOver={stopTimer}
              onMouseLeave={startTimer}
            >
              <Box position="absolute" height="100%" zIndex={1} p={24}>
                <Box
                  width={430}
                  height="100%"
                  p={40}
                  backgroundColor="white"
                  borderRadius="large"
                >
                  <Text fontWeight="bold" fontSize={30} mb={24}>
                    {item.title}
                  </Text>
                  <Text fontSize={24} lineHeight={1.3} mb={24}>
                    Don't compromise on style! <br />
                    Get 50% off for new arrivals
                  </Text>
                  <NextLink href={item.href}>
                    <Button width={1}>SHOP NOW</Button>
                  </NextLink>
                </Box>
              </Box>
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
      <Box
        display="flex"
        position="relative"
        onMouseOver={stopTimer}
        onMouseLeave={startTimer}
        zIndex={1}
        pb={46}
        gap={16}
      >
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
