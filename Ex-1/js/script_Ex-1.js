function CalcularSalario() {
    const salario = prompt('Digite seu sálario:');
    const aumento = prompt('Digite a porcentagem do aumento:');
    const resulatdo = Number(salario) * (1 + Number(aumento) / 100);
    
    document.write(resulatdo);
    alert(resulatdo);
}