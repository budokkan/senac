//Crie uma função que verifique se uma string começa com uma letra específica.
function comecaComLetra(str, letra) {
    return str.charAt(0).toLowerCase() === letra.toLowerCase();
}

console.log(comecaComLetra('Banana', 'B')); 
console.log(comecaComLetra('Banana', 'A')); 
