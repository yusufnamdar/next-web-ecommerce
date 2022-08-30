import { Box } from 'components/Box'
import { Card } from 'components/Card'
import { NextLink } from 'components/NextLink'
import { Product } from 'models/productModel'
import type { GetServerSideProps, NextPage } from 'next'
import { getSerializableData } from 'utils'
import { connect } from 'utils/mongodb'

interface ProductsPageProps {
  products: IProduct[]
}

const ProductsPage: NextPage<ProductsPageProps> = ({ products }) => {
  return (
    <Box display="flex" flexWrap="wrap" gap={20} justifyContent="center">
      {products?.map((product) => {
        return (
          <NextLink key={product._id} href={`/product/${product._id}`}>
            <Card {...product} />
          </NextLink>
        )
      })}
    </Box>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const query = ctx.query
  await connect()
  const products = await Product.buildQuery(query).exec()

  return { props: { products: getSerializableData(products) } } //Next could not serialize ObjectId func and Dates as JSON, so we need to manually stringify the data and then parse it.
}

export default ProductsPage
