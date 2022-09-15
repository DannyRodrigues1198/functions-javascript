function imc ( peso,altura ) {
    const calculo = peso / Math.pow(altura,2);
    return calculo
}

module.exports = imc