function ComprarMaca() {
    let quantimacas = Number(
      prompt("Digite a quantidade de maçãs que deseja comprar: ")
    )
    if (quantimacas >= 12) {
      let custoTotal = quantimacas * 1
      alert("O custo total da compra é de R$ " + custoTotal)
    } else if (quantimacas >= 1) {
      let custoTotal = quantimacas * 1.3
      alert("O custo Final da compra é de R$ " + custoTotal)
    } else {
      alert("Tente novamente")
    }
  }