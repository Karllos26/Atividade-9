function MassaRadioativa() {
    let massa = Number(prompt("Digite a massa do material: "))
    let i
    for (i = 1; massa > 0.1; i++) {
      massa = massa * 0.75
      console.log("Massa=>" + massa)
      console.log("Tempo =>" + i)
    }
    console.log("Tempo =>" + (i - 1))
  
    let tempo = (i - 1) * 0.5
    alert(
      "O tempo necessario para atingir a massa de 0.10 é "+ tempo +"minutos";
    )
  }