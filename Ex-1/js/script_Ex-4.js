function mediaClasse() {
    let quantiAlunos = Number(prompt("Quantos alunos tem na classe ?"))
    let notaclasse = Number()
  
    if (quantiAlunos > 0) {
      for (let i = 0; i < quantiAlunos; i++) {
        nota = Number(prompt("Digite a nota do aluno " + (i+1) + " :"))
        notaclasse = notaclasse + nota
      }
      let media = Number(notaclasse / quantiAlunos)
      alert("A média da sala é de " + media)
    } else {
      alert("Quantidade de alunos Inválida")
    }
  }