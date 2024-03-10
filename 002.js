function calculo(valor) {
    if (valor < 0)
        throw new Error('O valor precisa ser maior que 0')

    if (valor == 1 || valor == 0)
        return true

    let penultimoNumero = 0
    let ultimoNumero = 1
    let soma = 0

    while (soma < valor) {
        soma = penultimoNumero + ultimoNumero

        penultimoNumero = ultimoNumero
        ultimoNumero = soma
    }

    if (soma == valor)
        return true
    else
        return false
}

let resultado = calculo(10)

if(resultado){
    alert('O número faz parte da sequência Fibonacci')
}
else{
    alert('O número não faz parte da sequência Fibonacci')
}