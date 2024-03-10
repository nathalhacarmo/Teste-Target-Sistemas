function inverter(palavra) {
    let result = ''
    for (let i = palavra.length; i > 0; i--) {
        result += palavra[i - 1]
    }
    return result
}

console.log(inverter('string'))