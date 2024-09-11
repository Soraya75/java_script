function contaVogais(str) {
    return [...str.toLowerCase()].filter(char => 'aeiou'.includes(char)).length;
}


console.log(contaVogais("Olá, como vai você?"));
