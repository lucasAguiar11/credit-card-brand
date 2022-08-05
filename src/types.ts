export type CardBrand = {
  name: string
  code: string
  image: string
}

export type BrandPattern = {
  pattern: RegExp
  brand: CardBrand
}
