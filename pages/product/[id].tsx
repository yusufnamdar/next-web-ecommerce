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
import { optionTextMap, optionValueMap } from 'utils/constants'
import { Row } from 'components/global'
import { useDispatch } from 'react-redux'
import SkuOption from 'components/Product/SkuOption'
import Gallery from 'components/Product/Gallery'
import { addToCart } from 'store/slice'

interface ProductPageProps {
  product: IProduct
}

const ProductPage: NextPage<ProductPageProps> = ({ product }) => {
  const dispatch = useDispatch()
  const {
    _id,
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
  const { type = 'size', value } = options || {}
  const [sku, setSku] = useState(skus[0])
  const isSelectedOutOfStock = !sku.quantity

  const handleSkus = (value: OptionValueType) => {
    const sku = skus.find((sku) => sku[type] == value)
    sku && setSku(sku)
  }

  const addItemToCart = () => {
    dispatch(
      addToCart({
        _id,
        title,
        sku,
        image: images[0],
        optionType: options?.type,
      })
    )
  }

  return (
    <Panel maxWidth={1000} mx="auto" p={20}>
      <Row gap={24}>
        <Gallery images={images} title={title} />
        <Box width={1}>
          <Text fontSize={11} color="gray.400" mb={5}>
            {gender ? gender[0].toUpperCase() + gender.substring(1) + ' ' : ''}
            {category} category
          </Text>
          <Text fontSize={20} fontWeight="semi-bold" mb="2px">
            {title}
          </Text>
          <Text fontSize={11} color="gray.400">
            Seller: <span className="cyan-500">{seller.toUpperCase()}</span>
          </Text>
          <Box display="flex" alignItems="center" my={10}>
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
          <Box hidden={!options} mb={10}>
            <Text
              className="capitalize"
              fontSize={14}
              fontWeight="semi-bold"
              mb={10}
            >
              {type}:{' '}
              <span className="gray-400">
                {optionTextMap[sku[type] as OptionValueType]}
              </span>
            </Text>
            <Box display="flex" gap={10} mb={10}>
              {value?.map((optionValue) => {
                const isActive = sku[type] == optionValue //some sku values are number and all option values are string, that is why "==" is used
                const isOutOfStock = !skus.find(
                  (sku) => sku[type] == optionValue
                )?.quantity
                return (
                  <SkuOption
                    key={optionValue}
                    type={type}
                    value={optionValueMap[optionValue]}
                    isActive={isActive}
                    isOutOfStock={isOutOfStock}
                    onClick={handleSkus.bind(null, optionValue)}
                  />
                )
              })}
            </Box>
            <Box mt={10} display="flex" alignItems="center">
              <Icon name="checkroom" size={20} color="primary.400" />
              <Text fontSize={12} color="gray.400" ml={6} mt={1}>
                Most users recommend getting your known size.
              </Text>
            </Box>
          </Box>
          <Box display="flex">
            <Button
              width={1}
              height={50}
              disabled={isSelectedOutOfStock}
              onClick={addItemToCart}
              mr={15}
            >
              {isSelectedOutOfStock ? 'Out of Stock' : 'Add to Cart'}
            </Button>
            <Favorite
              size={50}
              borderWidth={1}
              borderStyle="solid"
              borderColor="gray.300"
              borderRadius="large"
            />
          </Box>
          <Box height={1} bg="gray.300" my={16} />
          <Text fontSize={14} mb={1} fontWeight="semi-bold" color="gray.400">
            Description
          </Text>
          <Text fontSize={12} lineHeight={1.5} color="gray.400">
            {description}
          </Text>
        </Box>
      </Row>
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
