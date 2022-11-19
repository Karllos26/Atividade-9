function fatoracao() {
    let num = BigInt(prompt("Digite um Numero: "))
    let fatorar = BigInt(1)
    let numero = num
    for (num; num > 0; num--) {
      fatorar = fatorar * num
      console.log(fatorar)
    }
    alert("O fatorial de " + numero + " é " + fatorar)
  }
  