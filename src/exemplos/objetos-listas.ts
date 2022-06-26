const pessoa = {
    nome: 'mariana',
    idade: 28,
    profissao: 'desenvolvedora',

}
pessoa.idade = 25;

const andre: {nome:string, idade:number, profissao:string}= {
    nome:'Andre',
    idade: 25,
    profissao: 'pintor'

} 

const paula: {nome:string, idade:number, profissao:string}= {
    nome:'paula',
    idade: 25,
    profissao: 'Desenvolvedora'

} 
enum profissao{
    prodessora,
    atriz,
    Desenvolvedora,
    JogadoraDeFutebol
}
interface pessoa{
    nome: string,
    idade: number,
    profissao?: profissao
}

interface estudante extends pessoa{
    materiais: string[]
}

const vanessa: pessoa = {
    nome: 'vanessa',
    idade: 25,
    profissao: profissao.Desenvolvedora
}

const monica: estudante={
    nome: 'jessica',
    idade:28,
    profissao:profissao.Desenvolvedora,
    materiais:['matematica discreta', 'programação']
}
function listar(lista:string[]) {
    for (const item of lista){
        console.log('- ', item);
    }
}
listar(monica.materiais);