# credit-card-get-brand

## install

```bash

npm i credit-card-get-brand

# or

yarn add credit-card-get-brand

```

## Basic usage

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

## API

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