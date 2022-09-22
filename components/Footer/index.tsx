import { Box } from 'components/Box'
import { Row } from 'components/global'
import { Icon } from 'components/Icon'
import { NextLink } from 'components/NextLink'
import { Text } from 'components/Text'
import Image from 'next/image'

const Footer = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  return (
    <Box bg="cyan.1000" color="white">
      <Box
        className="pointer no-user-select hover-cyan-bg"
        onClick={scrollTop}
        display="flex"
        justifyContent="center"
        alignItems="center"
        bg="cyan.900"
        p={16}
      >
        <Text fontSize={13} fontWeight="semi-bold">
          Back to top
        </Text>
      </Box>
      <Row
        justifyContent="space-between"
        maxWidth={1200}
        mx="auto"
        py={40}
        px={16}
        gap={24}
      >
        <Box width={440}>
          <Text fontSize={20} fontWeight="bold" mb={24}>
            Yusuf 🕊
          </Text>
          <Text fontSize={16} fontWeight="semi-bold" lineHeight={1.5}>
            Hello 👋, thank you for checking out my e-commerce project. It took
            me around a month to get to this stage. It was a good oppurtunity to
            learn new and cool things, as well as implementing what I already
            knew. I gave it my all and will continue to do so for the new
            features.
          </Text>
        </Box>
        <Box display="flex" flexDirection="column" alignItems="flex-start">
          <Text
            fontSize={18}
            fontWeight="semi-bold"
            whiteSpace="nowrap"
            mb={24}
          >
            Useful Links
          </Text>
          <NextLink href="/" className="hover-primary-color">
            <Text fontSize={14} fontWeight="semi-bold" mb={8}>
              Home
            </Text>
          </NextLink>
          <NextLink href="/cart" className="hover-primary-color">
            <Text fontSize={14} fontWeight="semi-bold" mb={8}>
              Cart
            </Text>
          </NextLink>
          <NextLink href="/products?gender=men" className="hover-primary-color">
            <Text
              fontSize={14}
              fontWeight="semi-bold"
              whiteSpace="nowrap"
              mb={8}
            >
              Men's fashion
            </Text>
          </NextLink>
          <NextLink
            href="/products?gender=women"
            className="hover-primary-color"
          >
            <Text
              fontSize={14}
              fontWeight="semi-bold"
              whiteSpace="nowrap"
              mb={8}
            >
              Women's fashion
            </Text>
          </NextLink>
          <NextLink
            href="/products?category=toys"
            className="hover-primary-color"
          >
            <Text
              fontSize={14}
              fontWeight="semi-bold"
              whiteSpace="nowrap"
              mb={8}
            >
              Toys & games
            </Text>
          </NextLink>
        </Box>
        <Box display="flex" flexDirection="column" alignItems="flex-start">
          <Text fontSize={18} fontWeight="semi-bold" mb={24}>
            Contact
          </Text>
          <a href="tel:+905071234567" className="hover-primary-color">
            <Box display="flex" alignItems="center" mb={20} gap={6}>
              <Icon name="call" /> +91-234-567-89-99
            </Box>
          </a>
          <a
            href="mailto:yusufnamdar18@gmail.com"
            className="hover-primary-color"
          >
            <Box display="flex" alignItems="center" mb={24} gap={6}>
              <Icon name="email" />
              yusufnamdar18@gmail.com
            </Box>
          </a>
          <Box display="flex" gap={16}>
            <a
              href="https://www.linkedin.com/in/yusuf-namdar-4884401b9/"
              target="blank"
              rel="noreferrer noopener"
            >
              <Image src="/socials/linkedin.png" width={34} height={34} />
            </a>
            <a
              href="https://github.com/yusufnamdar"
              target="blank"
              rel="noreferrer noopener"
            >
              <Image src="/socials/github.png" width={34} height={34} />
            </a>
          </Box>
        </Box>
      </Row>
    </Box>
  )
}

export default Footer
