"use strict";
function somarValores(imput1, imput2) {
    if (typeof imput1 === 'string' || typeof imput2 === 'string') {
        return imput1.toString() + imput2.toString();
    }
    else {
        return imput1 + imput2;
    }
}
console.log(somarValores(1, 5));
console.log(somarValores('ola', ',tudo bem?'));
console.log(somarValores('1', 5));
