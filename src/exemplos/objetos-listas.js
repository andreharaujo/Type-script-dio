"use strict";
const pessoa = {
    nome: 'mariana',
    idade: 28,
    profissao: 'desenvolvedora',
};
pessoa.idade = 25;
const andre = {
    nome: 'Andre',
    idade: 25,
    profissao: 'pintor'
};
const paula = {
    nome: 'paula',
    idade: 25,
    profissao: 'Desenvolvedora'
};
var profissao;
(function (profissao) {
    profissao[profissao["prodessora"] = 0] = "prodessora";
    profissao[profissao["atriz"] = 1] = "atriz";
    profissao[profissao["Desenvolvedora"] = 2] = "Desenvolvedora";
    profissao[profissao["JogadoraDeFutebol"] = 3] = "JogadoraDeFutebol";
})(profissao || (profissao = {}));
const vanessa = {
    nome: 'vanessa',
    idade: 25,
    profissao: profissao.Desenvolvedora
};
const monica = {
    nome: 'jessica',
    idade: 28,
    profissao: profissao.Desenvolvedora,
    materiais: ['matematica discreta', 'programação']
};
function listar(lista) {
    for (const item of lista) {
        console.log('- ', item);
    }
}
listar(monica.materiais);
