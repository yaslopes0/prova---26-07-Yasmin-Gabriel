function calcularSalario() {
    // Definindo as variáveis
    const horasTrabalhadas = 160; // HT
    const valorHora = 25;         // VH
    const percentualDesconto = 10; // PD
    
    // Calculando o salário bruto
    let salarioBruto = horasTrabalhadas * valorHora;
    
    // Calculando o total de desconto
    let desconto = salarioBruto * (percentualDesconto / 100);
    
    // Calculando o salário líquido
    let salarioLiquido = salarioBruto - desconto;
    
    // Exibindo os resultados
    alert(`Salário Bruto: R$ ${salarioBruto.toFixed(2)}
Desconto: R$ ${desconto.toFixed(2)}
Salário Líquido: R$ ${salarioLiquido.toFixed(2)}`);
}

// Chama a função para calcular e mostrar o salário
calcularSalario();
