//Escreva uma função que encontre o maior número dentro de uma matriz.
function maiorNumeroMatriz(matriz) {
    let maior = matriz[0][0]; 
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j] > maior) {
                maior = matriz[i][j];
            }
        }
    }
    return maior;
}

const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(maiorNumeroMatriz(matriz)); 