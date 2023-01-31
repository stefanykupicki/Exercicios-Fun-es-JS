// Exercício 1- Faça uma função que escreva seu nome

function digaMeuNome(nome){
    console.log('Exercício 1 = Meu nome é ' + nome);
}

digaMeuNome('Stefany');
digaMeuNome('Gabriele');

// Exercício 2- Faça uma função que defina se você é maior de idade

function verificarIdade(idade){
    if (idade >= 18){
        console.log('Você é maior de idade!'); 
    } else {
        console.log('Você é menor de idade');
    }
}

verificarIdade(21);

/* Exercício 3:

Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de
etiqueta e a escolha da forma de pagamento.

Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar
o calculo adequado 

1- A vista (Débito) = recebe 10% de desconto 
2- A vista (Dinheiro ou PIX) = recebe 15% de desconto 
3- Em duas vezes = preço normal, sem juro
4- Acima de duas vezes = preço normal + juros de 10% */


function aplicarDesconto (valor, desconto) {
    return (valor - (valor * (desconto / 100)));
}

function aplicarJuros (valor, juros) {
    return (valor + (valor * (juros / 100)));
}

const precoEtiqueta = 100;
const formaDePgto = 4;

if (formaDePgto === 1){
    console.log(aplicarDesconto(precoEtiqueta, 10));
}else if (formaDePgto === 2){
    console.log(aplicarDesconto(precoEtiqueta, 15));
}else if (formaDePgto === 3){
    console.log(precoEtiqueta);
}else {
    console.log(aplicarJuros(precoEtiqueta, 10));
}