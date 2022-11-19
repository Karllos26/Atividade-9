function SequenciaN() {
    let Numero = Number(prompt("Digite um número: "))

    let sequencia
    if (Numero > 0) {
        for (let i = 0; i < Numero; Numero--) {
            sequencia = sequencia + " " + Numero
        }
        alert("Sequência Numérica: " + sequencia)
    } else {
        alert("Somente numeros maiores que 0 ")
    }
}