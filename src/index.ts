import brands from './brands'
import { CardBrand } from './types'

const cleanNumber = (cardNumber: string): string => {
  return cardNumber.replace(/\D/g, '')
}

export const getBrand = (cardNumber: string): CardBrand | null => {
  const cleanedNumber = cleanNumber(cardNumber)

  if (!cleanedNumber) return null

  const brandPattern = brands.find((item) => {
    if (item.pattern.test(cleanedNumber)) return item.brand
  })

  if (!brandPattern) console.log('No brand found for card number: ', cardNumber)
  return brandPattern?.brand || null
}
