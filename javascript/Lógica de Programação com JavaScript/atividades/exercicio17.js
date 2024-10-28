//Crie uma função que conte o número de vogais em uma string.
function contarVogais(str) {
    const vogais = 'aeiouAEIOU';
    let contador = 0;
    
    for (let i = 0; i < str.length; i++) {
        if (vogais.includes(str[i])) {
            contador++;
        }
    }
    
    return contador;
}

console.log(contarVogais('Olá, mundo!')); 

