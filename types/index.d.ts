//I prefixed the names with "I" to indicate that the type or the interface is in the "index.d.ts" file.

type IRecord = Record<string, any>

interface IProduct {
  _id: string
  title: string
  gender: string
  seller: string
  category: string
  saleCount: number
  reviews?: {
    count: number
    average: number
  }
  skus: ISku[]
  images?: string[]
  description?: string
  options?: {
    type: OptionType
    value: OptionValueType[]
  }
  createdAt: string
  updatedAt: string
}

interface ISku {
  sku: string
  material?: number
  color?: number
  size?: string
  fit?: number
  heel?: number
  age?: number
  brand?: string
  quantity: number
  price: number
}

interface IResponse<T> {
  success: boolean
  message: string
  result?: T
  filters?: Record<string, unknown>
}

type OptionType =
  | 'material'
  | 'color'
  | 'size'
  | 'fit'
  | 'heel'
  | 'age'
  | 'brand'

type OptionValueType = 1 | 2 | 3 | 4 | 5 | 6 | 'S' | 'M' | 'L' | 35 | 40 | 45

interface ICartItem {
  _id: string
  title: string
  sku: ISku
  quantity: number
  image: string
  optionType?: OptionType
}
