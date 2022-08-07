import type { NextApiRequest, NextApiResponse } from 'next'
import { connect } from 'utils/mongodb'
import { Product } from 'models/productModel'
import { getFilters } from 'utils'

type Result = IProduct[]

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<IResponse<Result>>
) => {
  if (req.method === 'GET') {
    try {
      await connect()
      console.log('start', req.query)

      const query = Product.buildQuery(req.query) // This is the Product's static query builder function
      const result = await query.exec() // Execute the built query
      const filters = getFilters(result) // Get dynamic filters object

      res
        .status(200)
        .json({ success: true, message: 'Success', filters, result })
    } catch (e: any) {
      res.status(500).json({ success: false, message: e.message })
    }
  }
}

export default handler
