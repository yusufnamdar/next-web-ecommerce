import { Box } from 'components/Box'
import { Card } from 'components/Card'
import { Product } from 'models/productModel'
import type { GetStaticProps, NextPage } from 'next'
import { connect } from 'utils/mongodb'

interface HomePageProps {
  products: IProduct[]
}

const HomePage: NextPage<HomePageProps> = ({ products }) => {
  return (
    <Box display="flex" flexWrap="wrap" gap={20} justifyContent="center">
      {products?.map((product) => {
        return <Card key={product._id} {...product} />
      })}
    </Box>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  await connect()

  let products = await Product.find({}).exec()
  products = JSON.parse(JSON.stringify(products)) //Next could not serialize ObjectId func and Dates as JSON, so we need to manually stringify the data and then parse it.
  return { props: { products } }
}

export default HomePage
