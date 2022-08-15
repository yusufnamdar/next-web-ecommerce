//I prefixed the names with "I" to indicate that the type or the interface is in the "index.d.ts" file.

type IRecord = Record<string, any>

interface IProduct {
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
    type: string
    value: string[]
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
