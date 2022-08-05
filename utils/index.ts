export const getFilters = (products: IProduct[] | IProduct): IRecord => {
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
