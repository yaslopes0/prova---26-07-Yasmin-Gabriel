function calcularMediaFinal() {
    let p1 = parseFloat(prompt("Digite a nota da P1:"));
    let p2 = parseFloat(prompt("Digite a nota da P2:"));
    let p3 = parseFloat(prompt("Digite a nota da P3:"));
    let p4 = parseFloat(prompt("Digite a nota da P4:"));

    
    if (isNaN(p1) || isNaN(p2) || isNaN(p3) || isNaN(p4)) {
        alert("Por favor, insira valores válidos para todas as provas.");
        return;
    }

    
    let media = (p1 + p2 + p3 + p4) / 4;

    
    alert("A média final do aluno é: " + media.toFixed(2));
}
