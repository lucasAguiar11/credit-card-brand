# credit-card-get-brand

![Downloads](https://img.shields.io/npm/dt/credit-card-get-brand.svg)
[![PayPal][badge_paypal_donate]][paypal-donations]

## :cloud: Installation

```sh
# Using npm
npm install --save credit-card-get-brand

# Using yarn
yarn add credit-card-get-brand
```

## :clipboard: Example

From the card number, return the brand

```js
var creditCard = require("credit-card-get-brand");

const cardNumber = "4111111111111111"; // Visa
const brand = creditCard.getBrand(cardNumber);

console.log(brand);

/* Output:

    {
        code: 'visa',
        name: 'Visa',
        image: 'https://i.im.ge/2022/08/06/FcJsAy.visa.png'
    }
*/
```

## :mag: API

### `getBrand(cardNumber: String)`

`getBrand` will return an  objects with the following data:


| Key   | Type   | Description                  |
|-------|--------|------------------------------|
| name  | String | Brand name                   |
| code  | String | Brand unique identification  |
| image | String | Brand image link             |

### Accepted brands

- ELO
- MASTERCARD
- MAESTRO
- AMEX
- DISCOVER
- DINERS
- JCB
- HIPERCARD
- VISA


[badge_paypal]: https://ionicabizau.github.io/badges/paypal.svg
[badge_paypal_donate]: https://ionicabizau.github.io/badges/paypal_donate.svg
[paypal-donations]: https://www.paypal.com/donate/?hosted_button_id=DYNBVV9MWPA88
