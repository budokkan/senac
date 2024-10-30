//Escreva uma função que receba um array de números e retorne a soma de todos os elementos.
function somaArray(numeros) {
    let soma = 0;
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    }
    return soma;
}

console.log(somaArray([1, 2, 3, 4, 5]));
