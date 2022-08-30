import { Box } from 'components/Box'
import { Icon } from 'components/Icon'
import Image from 'next/image'
import { FC, useState } from 'react'

interface GalleryProps {
  images: string[]
  title: string
}

const Gallery: FC<GalleryProps> = ({ images, title }) => {
  const [activeImage, setActiveImage] = useState(0)

  const handleNext = () => {
    setActiveImage((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  const handlePrevious = () => {
    setActiveImage((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      width={400}
      minWidth={400}
    >
      <Box
        position="relative"
        width={400}
        height={600}
        borderRadius="regular"
        overflow="hidden"
        mb={3}
      >
        <Image
          src={images[activeImage]}
          alt={`${title}-active`}
          placeholder="blur"
          blurDataURL="https://via.placeholder.com/5"
          layout="fill"
          objectFit="cover"
        />
        <Box
          height="100%"
          display="flex"
          alignItems="center"
          position="absolute"
          right={0}
        >
          <Box
            className="pointer"
            display="flex"
            justifyContent="center"
            alignItems="center"
            onClick={handleNext}
            width={40}
            height={50}
            borderBottomLeftRadius="large"
            borderTopLeftRadius="large"
            bg="white"
          >
            <Icon
              name="arrow_forward_ios"
              size={30}
              color="primary.500"
              cursor="pointer"
              outlined
            />
          </Box>
        </Box>
        <Box
          height="100%"
          display="flex"
          alignItems="center"
          position="absolute"
        >
          <Box
            className="pointer"
            display="flex"
            justifyContent="center"
            alignItems="center"
            onClick={handlePrevious}
            width={40}
            height={50}
            borderBottomRightRadius="large"
            borderTopRightRadius="large"
            bg="white"
          >
            <Icon
              name="arrow_back_ios"
              size={30}
              color="primary.500"
              outlined
            />
          </Box>
        </Box>
      </Box>
      <Box
        className="no-scrollbar"
        display="flex"
        justifyContent="center"
        gap={16}
        overflowX="scroll"
      >
        {images.map((image, idx) => {
          return (
            <Box
              key={idx}
              className="pointer"
              position="relative"
              width={44}
              height={64}
              borderRadius="regular"
              onClick={() => setActiveImage(idx)}
              borderColor={activeImage === idx ? 'primary.500' : 'white'}
              borderWidth={2}
              borderStyle="solid"
              overflow="hidden"
            >
              <Image
                src={image}
                layout="fill"
                alt={`${title}-${idx}`}
                placeholder="blur"
                blurDataURL="https://via.placeholder.com/5"
              />
            </Box>
          )
        })}
      </Box>
    </Box>
  )
}

export default Gallery
