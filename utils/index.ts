import { ThemeKeys } from 'theme'

export const getFilters = (products: IProduct[] | IProduct): IRecord => {
  // it may be better to use lodash, instead of this function
  const filters: IRecord = {}

  if (Array.isArray(products)) {
    products.forEach((product: IProduct) =>
      product.skus.forEach((sku: any) => {
        Object.entries(sku.toObject()).forEach(([key, value]) => {
          if (key === '_id' || key === 'sku' || filters[key]?.includes(value))
            return
          filters[key] = Array.isArray(filters[key])
            ? [...filters[key], value]
            : [value]
        })
      })
    )
  } else {
    products.skus.forEach((sku: any) => {
      Object.entries(sku.toObject()).forEach(([key, value]) => {
        if (key === '_id' || key === 'sku' || filters[key]?.includes(value))
          return
        filters[key] = Array.isArray(filters[key])
          ? [...filters[key], value]
          : [value]
      })
    })
  }

  return filters
}

export const noop = () => {} //this is used as a default value for parameters, so typescript does not give "possibly undefined" error

export const themeProp =
  (key: string, themeKey: ThemeKeys) => (props: IRecord) => {
    const arr = props[key].toString().split('.') //ex: key="bg" => gray.400 => ["gray","400"]
    let theme = props.theme[themeKey] //ex: themeKey="colors"

    arr.forEach((i: string) => {
      theme = theme[i]
    })
    return theme
  }
