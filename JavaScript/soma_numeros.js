function somanumeros(){
    const numero = [2,5,9,10];
    const soma = numero.reduce((accumulator,currentvalue) = accumulator + currentvalue,o);
    return soma
}
console.log(somanumeros())