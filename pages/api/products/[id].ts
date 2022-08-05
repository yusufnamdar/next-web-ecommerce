import type { NextApiRequest, NextApiResponse } from 'next'
import { connect } from '../../../utils/mongodb'
import { Product } from '../../../models/productModel'

type Result = IProduct

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<IResponse<Result>>
) => {
  if (req.method === 'GET') {
    try {
      await connect()
      console.log('start', req.query)

      const result = await Product.findById(req.query.id)

      if (!result) {
        return res
          .status(404)
          .json({ success: false, message: 'Could not be found' })
      }

      res.status(200).json({ success: true, message: 'Success', result })
    } catch (e: any) {
      res.status(500).json({ success: false, message: e.message })
    }
  }
}

export default handler
