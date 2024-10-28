//Escreva uma função que inverta a ordem dos elementos em um array sem usar o método reverse().
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