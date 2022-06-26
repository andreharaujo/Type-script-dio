"use strict";
let buttom = document.getElementById('buttom');
let imput1 = document.getElementById('imput1');
let imput2 = document.getElementById('imput2');
function somarNumeros(numero1, numero2) {
    return numero1 + numero2;
}
if (buttom) {
    buttom.addEventListener('click', () => {
        if (imput1 && imput2) {
            somarNumeros(Number(imput1.value), Number(imput2.value));
        }
    });
}
