import { Box } from 'components/Box'
import { Product } from 'models/productModel'
import { getSerializableData } from 'utils'
import { connect } from 'utils/mongodb'
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { Panel } from 'components/Panel'
import Image from 'next/image'

interface ProductPageProps {
  product: IProduct
}

const ProductPage: NextPage<ProductPageProps> = ({ product }) => {
  const { title, images, skus, options } = product || {}
  return (
    <Panel display="flex" height={790} p={20}>
      <Box width={400} minWidth={400} height={600}>
        <Image src={''} layout="fill" />
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
