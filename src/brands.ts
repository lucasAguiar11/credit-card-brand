import { BrandPattern } from './types'

const brands: BrandPattern[] = [
  {
    brand: {
      name: 'ELO',
      code: 'elo',
      image: 'https://i.im.ge/2022/08/05/Fc3Rvf.elo.png',
    },
    pattern:
      /^((401178|401179|431274|438935|451416|457393|457631|457632|504175|627780|636297|636369|(506699|5067[0-6]\d|50677[0-8])|(50900\d|5090[1-9]\d|509[1-9]\d{2})|65003[1-3]|(65003[5-9]|65004\d|65005[0-1])|(65040[5-9]|6504[1-3]\d)|(65048[5-9]|65049\d|6505[0-2]\d|65053[0-8])|(65054[1-9]|6505[5-8]\d|65059[0-8])|(65070\d|65071[0-8])|65072[0-7]|(65090[1-9]|65091\d|650920)|(65165[2-9]|6516[6-7]\d)|(65500\d|65501\d)|(65502[1-9]|6550[3-4]\d|65505[0-8]))[0-9]{10,12})$/,
  },
  {
    brand: {
      name: 'Mastercard',
      image: 'https://i.im.ge/2022/08/06/FcJ1hG.mastercard.png',
      code: 'mastercard',
    },
    pattern: /^5[1-5][0-9]{14}$/,
  },
  {
    brand: {
      name: 'Maestro',
      code: 'maestro',
      image: 'https://i.im.ge/2022/08/06/FcJwpY.maestro.png',
    },
    pattern: /^(?:5[0678]\d{0,2}|6304|67\d{0,2})\d{0,12}/,
  },
  {
    brand: {
      code: 'amex',
      name: 'American Express',
      image: 'https://i.im.ge/2022/08/06/FcJ2bx.amex.png',
    },
    pattern: /^3[47][0-9]{13}$/,
  },
  {
    brand: {
      code: 'discover',
      name: 'Discover',
      image: 'https://i.im.ge/2022/08/06/FcJxe1.discover.jpg',
    },
    pattern:
      /^6(?:011\d{12}|5\d{14}|4[4-9]\d{13}|22(?:1(?:2[6-9]|[3-9]\d)|[2-8]\d{2}|9(?:[01]\d|2[0-5]))\d{10})$/,
  },
  {
    brand: {
      code: 'diners',
      name: 'Diners Club',
      image: 'https://i.im.ge/2022/08/06/FcJSGa.diners.png',
    },
    pattern: /^3(?:0([0-5]|9)|[689]\d?)\d{0,11}/,
  },
  {
    brand: {
      code: 'jcb',
      name: 'JCB',
      image: 'https://i.im.ge/2022/08/06/FcJbCm.jcb.png',
    },
    pattern: /^(?:35\d{0,2})\d{0,12}/,
  },
  {
    brand: {
      code: 'hipercard',
      name: 'HiperCard',
      image: 'https://i.im.ge/2022/08/06/FcJqaJ.hipercard.png',
    },
    pattern: /^(606282\d{10}(\d{3})?)$/,
  },
  {
    brand: {
      code: 'visa',
      name: 'Visa',
      image: 'https://i.im.ge/2022/08/06/FcJsAy.visa.png',
    },
    pattern: /^4[0-9]{12}(?:[0-9]{3})?$/,
  },
]

export default brands
