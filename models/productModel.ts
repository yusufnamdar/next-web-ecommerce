import { models, model, Schema } from 'mongoose'

const skuSchema = new Schema({
  sku: String,
  material: Number,
  color: Number,
  size: String,
  fit: Number,
  heel: Number,
  age: Number,
  brand: String,
  quantity: { type: Number, min: 0 },
  price: { type: Number, min: 0 },
})

const optionSchema = new Schema({ type: String, value: [String] })

const productSchema = new Schema(
  {
    title: { type: String, required: true },
    gender: { type: String, required: true, lowercase: true },
    seller: { type: String, required: true },
    category: { type: String, required: true, lowercase: true },
    saleCount: { type: Number, min: 0 },
    reviews: {
      count: Number,
      average: { type: Number, min: 0, max: 5 },
    },
    skus: [skuSchema],
    images: [String],
    description: String,
    options: optionSchema,
  },
  { timestamps: true }
)

//for the collection name of the model, mongoose automatically looks for the plural, lowercased version of your model name.
const Product = models.Product || model('Product', productSchema)
// if Product model already exist, use models.Product

export { Product }
