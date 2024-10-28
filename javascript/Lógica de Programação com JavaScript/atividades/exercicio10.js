//Escreva uma função que receba dois números, some-os e imprima se a soma é maior que 10.
function somaMaiorQueDez(num1, num2) {
    const soma = num1 + num2;
    if (soma > 10) {
        console.log("A soma é maior que 10");
    } else {
        console.log("A soma não é maior que 10");
    }
}


somaMaiorQueDez(7, 5);
somaMaiorQueDez(3, 4);
