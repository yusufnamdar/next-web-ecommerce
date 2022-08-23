import { Box } from 'components/Box'
import { Product } from 'models/productModel'
import { getSerializableData } from 'utils'
import { connect } from 'utils/mongodb'
import { Panel } from 'components/Panel'
import { Text } from 'components/Text'
import { StarRating } from 'components/StarRating'
import { useState } from 'react'
import { Icon } from 'components/Icon'
import { Button } from 'components/Button'
import { Favorite } from 'components/Favorite'
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Image from 'next/image'

interface ProductPageProps {
  product: IProduct
}

const ProductPage: NextPage<ProductPageProps> = ({ product }) => {
  const {
    reviews,
    seller,
    gender,
    category,
    title,
    images = [],
    skus,
    options,
    description,
  } = product || {}
  const { type, value } = options || {}
  const [sku, setSku] = useState(skus[0])

  return (
    <Panel display="flex" p={20}>
      <Box width={400} height={600}>
        <Image
          src={images[0]}
          alt={title}
          placeholder="blur"
          blurDataURL="https://via.placeholder.com/5"
          layout="fill"
        />
      </Box>
      <Box>
        <Text fontSize={12} color="gray.400" mb={5}>
          {`${
            gender ? gender[0].toUpperCase() + gender.substring(1) + ' ' : ''
          }${category} category`}
        </Text>
        <Text fontSize={20} fontWeight="semi-bold">
          {title}
        </Text>
        <Text fontSize={12} color="gray.400">
          Seller: <span className="cyan-400">{seller.toUpperCase()}</span>
        </Text>
        <Box display="flex" my={10}>
          <StarRating rate={reviews?.average} size={14} disabled />
          {!!reviews?.count && (
            <Text
              ml={1}
              fontSize={10}
              color="gray.400"
            >{`${reviews?.count} reviews`}</Text>
          )}
        </Box>
        <Text fontSize={24} fontWeight="semi-bold" color="primary.400">
          $ {sku.price}
        </Text>
        <Box height={1} bg="gray.300" my={16} />
        <Box hidden={!options}>
          <Text
            className="capitalize"
            fontSize={14}
            fontWeight="semi-bold"
            mb={16}
          >
            {type}: <span className="gray-400">{type && sku[type]}</span>
          </Text>
          <Box display="flex" gap={10}>
            {value?.map((option) => {
              return ''
            })}
          </Box>
          {/* margin i başka yere koyabiliriz */}
          <Box my={10} display="flex" alignItems="center">
            <Icon name="checkroom" size={16} color="primary.400" />
            <Text fontSize={12} color="gray.400" ml={7}>
              Most users recommend getting your known size.
            </Text>
          </Box>
        </Box>
        <Box display="flex">
          <Button width={1} height={50}>
            Add to Cart
          </Button>
          <Favorite />
        </Box>
        <Box height={1} bg="gray.300" my={16} />
        <Text fontSize={14} mb={1}>
          Description
        </Text>
        <Text fontSize={12} color="gray.400">
          {description}
        </Text>
      </Box>
    </Panel>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  await connect()
  const products = await Product.find({}).exec()

  const paths = products.map((product: IProduct) => {
    return { params: { id: product._id.toString() } }
  })

  return { fallback: 'blocking', paths }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  await connect()
  const product = await Product.findById(params?.id).exec()

  return { props: { product: getSerializableData(product) } }
}

export default ProductPage
