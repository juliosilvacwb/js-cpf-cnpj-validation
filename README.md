# js-cpf-cnpj-validation

Lib for CNPJ validation

#### Javascript CNPJ example:
```js
const cpfOrCnpj = require('js-cpf-cnpj-validation');  
console.log(cpfOrCnpj.isCPForCNPJ("49.623.477/0001-12"))
``` 
Output:
true

#### Typescript CNPJ example:
```ts 
import { isCPForCNPJ } from 'js-cpf-cnpj-validation'
console.log(isCPForCNPJ("49.623.477/0001-12"))
```

Output:
true

#### Javascript CPF example:
```js
const cpfOrCnpj = require('js-cpf-cnpj-validation');  
console.log(cpfOrCnpj.isCPForCNPJ("153.856.490-40"))
``` 
Output:
true

#### Typescript CPF example:
```ts 
import { isCPForCNPJ } from 'js-cpf-cnpj-validation'
console.log(isCPForCNPJ("153.856.490-40")
```

Output:
true