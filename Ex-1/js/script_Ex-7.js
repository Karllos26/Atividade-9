function PHPcomparacao() {
    let a = Number(prompt("Digite o 1º numero: "))
    let b = Number(prompt("Digite o 2º numero: "))
    let c = Number(prompt("Digite o 3º numero: "))
    let d = Number(prompt("Digite o 4º numero: "))
  
    let soma = a + c
    let multi = b * d
  
    if (soma > multi) {
      alert(
        "A+C é Maior que B+D\n" + "soma => " + soma + "multiplicação=>" + multi
      )
    } else if (soma < multi) {
      alert(
        "A+C é Menor que B+D\n" + "soma => " + soma + "multiplicação=>" + multi
      )
    } else if (soma == multi) {
      alert(
        "A+C é Igual a B+D\n" + "soma => " + soma + "multiplicação=>" + multi
      )
    } else {
      alert("Dados incorretos")
    }
  }