//Escreva uma função que receba um array de números e retorne um novo array contendo apenas os números pares.
function filtrarPares(array) {
    let pares = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            pares.push(array[i]);
        }
    }
    return pares;
}


console.log(filtrarPares([1, 2, 3, 4, 5, 6])); 

