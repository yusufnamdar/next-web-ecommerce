import { Box } from 'components/Box'
import { Card } from 'components/Card'
import { Panel } from 'components/Panel'
import { Text } from 'components/Text'
import { Product } from 'models/productModel'
import type { GetServerSideProps, NextPage } from 'next'
import { getSerializableData } from 'utils'
import { connect } from 'utils/mongodb'
import Image from 'next/image'
import Router from 'next/router'

interface ProductsPageProps {
  products: IProduct[]
}

const ProductsPage: NextPage<ProductsPageProps> = ({ products }) => {
  if (!products.length) {
    return (
      <Panel
        maxWidth={1000}
        mx="auto"
        display="flex"
        flexDirection="column"
        alignItems="center"
        p={16}
      >
        <Box p={16}>
          <Image src="/no-data.svg" width={305} height={200} />
        </Box>
        <Text mt={16} fontSize={24} fontWeight="semi-bold" color="gray.400">
          No products found
        </Text>
      </Panel>
    )
  }

  return (
    <Box display="flex" flexWrap="wrap" gap={20} justifyContent="center">
      {products?.map((product) => {
        return (
          <div
            key={product._id}
            className="pointer"
            role="link"
            tabIndex={0}
            onClick={() => Router.push(`/product/${product._id}`)}
          >
            <Card {...product} />
          </div>
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
