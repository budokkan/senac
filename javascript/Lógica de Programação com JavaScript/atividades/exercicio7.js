//Crie uma função que receba um array de números e conte quantos números pares há nele.
function contarPares(numeros) {
    let contagem = 0;
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            contagem++;
        }
    }
    return contagem;
}

console.log(contarPares([1, 2, 3, 4, 5, 6]));
