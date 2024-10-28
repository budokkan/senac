//Escreva uma função que conte quantas palavras há em uma string.
function contarPalavras(str) {
    const palavras = str.trim().split(/\s+/);
    return palavras.length;
}

console.log(contarPalavras('Olá, mundo! Como você está?')); // Deve retornar 5
