import { models, model, Schema, Model } from 'mongoose'

interface IProductModel extends Model<IProduct> {
  buildQuery(req: IRecord): any
  getFilters(): any
}

const skuSchema = new Schema({
  sku: { type: String, required: true },
  material: Number,
  color: Number,
  size: String,
  fit: Number,
  heel: Number,
  age: Number,
  brand: String,
  quantity: { type: Number, min: 0, required: true },
  price: { type: Number, min: 0, required: true },
})

const optionSchema = new Schema({ type: String, value: [String] })

const productSchema = new Schema<IProduct>(
  {
    title: { type: String, required: true },
    gender: { type: String, required: true, lowercase: true },
    seller: { type: String, required: true },
    category: { type: String, required: true, lowercase: true },
    saleCount: { type: Number, min: 0, required: true },
    reviews: {
      count: Number,
      average: { type: Number, min: 0, max: 5 },
    },
    skus: { type: [skuSchema], required: true },
    images: [String],
    description: String,
    options: optionSchema,
  },
  { timestamps: true }
)

productSchema.statics.buildQuery = function (req) {
  const query = this.find() // Mongoose will not execute a query until exec has been called
  Object.entries(req).forEach(([key, value]: [string, any]) => {
    if (!value) return

    const multiple = value.split(',')
    if (key === 'gender') {
      return query.where('gender').in(multiple)
    }
    if (key === 'sale') {
      return query.sort({ saleCount: value })
    }
    if (key === 'price') {
      return multiple[1]
        ? query.and([
            {
              'skus.price': {
                $lte: multiple[0],
              },
            },
            {
              'skus.price': {
                $gte: multiple[1],
              },
            },
          ])
        : query.where('skus.price').lte(multiple[0])
    }
    if (key === 'reviews') {
      return query.sort({
        'reviews.average': 'desc',
        'reviews.count': 'desc',
      })
    }
    query.where(`skus.${key}`).in(multiple)
  })

  return query
}

//mongoose automatically looks for the plural, lowercased version of "Product" to match the collection name in mongodb.
const Product =
  (models.Product as IProductModel) ||
  model<IProduct, IProductModel>('Product', productSchema)
// if the Product model already exists, use models.Product

export { Product }
