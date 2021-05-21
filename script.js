let saldoInicial = prompt('Escreva o seu saldo inicial')

let valorDaCompra = prompt('Escreva o valor da compra')

if (valorDaCompra < saldoInicial) {
    alert(`A sua compra foi efetuada corretamente. Agora você possui ${saldoInicial-valorDaCompra}`)
}

else if (valorDaCompra > saldoInicial) {
    alert(`Saldo insuficiente`)
}


