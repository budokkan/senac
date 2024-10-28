//Crie uma função que receba um número N e retorne a soma de todos os números de 1 até N.
function somaAteN(n) {
    let soma = 0;
    for (let i = 1; i <= n; i++) {
        soma += i;
    }
    return soma;
}

// Testando a função
console.log(somaAteN(5)); 
console.log(somaAteN(10)); 
