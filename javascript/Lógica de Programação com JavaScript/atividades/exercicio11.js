//Escreva uma função que receba um array e retorne true se todos os números forem pares, ou false se houver algum ímpar.
function todosPares(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            return false;
        }
    }
    return true;
}

console.log(todosPares([2, 4, 6, 8])); 
console.log(todosPares([2, 4, 6, 7])); 
