"use strict";
let anyEstaDeVolta;
anyEstaDeVolta = 1;
anyEstaDeVolta = 'teste';
anyEstaDeVolta = 5;
let stringTeste = 'verificar';
stringTeste = anyEstaDeVolta;
let unknowValor;
unknowValor = 2;
unknowValor = 'agora vai';
unknowValor = true;
unknowValor = 'vai sim';
let stringTeste2 = 'agora vai';
if (typeof unknowValor === 'string') {
    stringTeste2 = unknowValor;
}
function jogaErro(erro, codigo) {
    throw { error: erro, code: codigo };
}
jogaErro('deu erro', 500);
