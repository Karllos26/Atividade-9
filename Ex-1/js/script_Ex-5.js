function tempMeded() {
    let Janeiro = Number(
      prompt("Digite a temperatura Média de Janeiro: ")
    )
    let Fevereiro = Number(
      prompt("Digite a temperatura Média de Fevereiro: ")
    )
    let Março = Number(
      prompt("Digite a temperatura Média de Março: ")
    )
    let Abril = Number(
      prompt("Digite a temperatura Média de Abril: ")
    )
    let Maio = Number(
      prompt("Digite a temperatura Média de Maio: ")
    )
    let Junho = Number(
      prompt("Digite a temperatura Média de Junho: ")
    )
    let Julho = Number(
      prompt("Digite a temperatura Média de Julho: ")
    )
    let Agosto = Number(
      prompt("Digite a temperatura Média de Agosto: ")
    )
    let Setembro = Number(
      prompt("Digite a temperatura Média de Setembro: ")
    )
    let Outubro = Number(
      prompt("Digite a temperatura Média de Outubro: ")
    )
    let Novembro = Number(
      prompt("Digite a temperatura Média de Novembro: ")
    )
    let Dezembro = Number(
      prompt("Digite a temperatura Média de Dezembro: ")
    )
    let meses =
      Janeiro + Fevereiro + Março + Abril + Maio + Junho + Julho + Agosto + Setembro + Outubro + nov + Dezembro
    let temperaturaMedia  = meses / 12
    let mediaAcima
    alert("A temperatura média é de " + temperaturaMedia.toFixed(2) + " Graus")
  
    if (Janeiro > tempMedia) {
      mediaAcima = "1 - Janeiro" + Janeiro + " Graus \n"
    }
    if (Fevereiro > tempMedia) {
      mediaAcima = mediaAcima + "2 - Fevereiro " + Fevereiro + " Graus \n"
    }
    if (Março > tempMedia) {
      mediaAcima = mediaAcima + "3 - Março " + Março + " Graus \n"
    }
    if (Abril > tempMedia) {
      mediaAcima = mediaAcima + "4 - Abril " + Abril + " Graus \n"
    }
    if (Maio > tempMedia) {
      mediaAcima = mediaAcima + "5 - Maio " + Maio + " Graus \n"
    }
    if (Junho > tempMedia) {
      mediaAcima = mediaAcima + "6 - Junho" + Junho + " Graus \n"
    }
    if (Julho > tempMedia) {
      mediaAcima = mediaAcima + "7 - Julho" + Julho + " Graus \n"
    }
    if (Agosto > tempMedia) {
      mediaAcima = mediaAcima + "8 - Agosto" + Agosto + " Graus \n"
    }
    if (Setembro > tempMedia) {
      mediaAcima = mediaAcima + "9 - Setembro" + Setembro + " Graus \n"
    }
    if (Outubro > tempMedia) {
      mediaAcima = mediaAcima + "10 - Outubro" + Outubro + " Graus \n"
    }
    if (nov > tempMedia) {
      mediaAcima = mediaAcima + "11 - Novembro" + nov + " Graus \n"
    }
    if (Dezembro > tempMedia) {
      mediaAcima = mediaAcima + "12 - Dezembro" + Dezembro + " Graus \n"
    }
    alert(mediaAcima)
}