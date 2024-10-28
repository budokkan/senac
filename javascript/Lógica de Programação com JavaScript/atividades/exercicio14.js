//Crie uma função que receba um número e imprima se ele é positivo, negativo ou zero.
function verificarNumero(n) {
    if (n > 0) {
        console.log("O número é positivo");
    } else if (n < 0) {
        console.log("O número é negativo");
    } else {
        console.log("O número é zero");
    }
}

verificarNumero(5);  
verificarNumero(-3); 
verificarNumero(0);  
