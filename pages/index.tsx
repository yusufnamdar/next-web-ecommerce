import { Box } from 'components/Box'
import { Card } from 'components/Card'
import Announcements from 'components/Home/Announcements'
import { NextLink } from 'components/NextLink'
import { Product } from 'models/productModel'
import type { GetStaticProps, NextPage } from 'next'
import { getSerializableData } from 'utils'
import { connect } from 'utils/mongodb'

interface HomePageProps {
  products: IProduct[]
}

const HomePage: NextPage<HomePageProps> = ({ products }) => {
  return (
    <>
      <Announcements height={540} mb={48} />
      <Box display="flex" flexWrap="wrap" gap={20} justifyContent="center">
        {products?.map((product) => {
          return (
            <NextLink key={product._id} href={`/product/${product._id}`}>
              <Card {...product} />
            </NextLink>
          )
        })}
      </Box>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  await connect()
  const products = await Product.find({}).exec()

  return { props: { products: getSerializableData(products) } } //Next could not serialize ObjectId func and Dates as JSON, so we need to manually stringify the data and then parse it.
}

export default HomePage
