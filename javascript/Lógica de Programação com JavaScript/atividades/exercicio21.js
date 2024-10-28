//Crie uma função recursiva que retorne o fatorial de um número.
function fatorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * fatorial(n - 1);
    }
}

console.log(fatorial(5)); 
console.log(fatorial(0)); 
