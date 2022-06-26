let buttom = document.getElementById('buttom');
let imput1 = document.getElementById('imput1') as HTMLInputElement;
let imput2 = document.getElementById('imput2') as HTMLInputElement;

function somarNumeros(numero1:number, numero2:number) {
    return numero1+numero2
}

if (buttom) {
    buttom.addEventListener('click', () => {
        if (imput1 && imput2) {
            somarNumeros(Number(imput1.value), Number(imput2.value))
        }
    });
}