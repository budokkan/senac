//Escreva uma função que verifique se um ano é bissexto.
function ehBissexto(ano) {
    if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}

console.log(ehBissexto(2024)); 
console.log(ehBissexto(1900));
console.log(ehBissexto(2000));
