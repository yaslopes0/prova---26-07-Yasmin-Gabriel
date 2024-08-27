function contarMaioridade() {
    let contagem = 0; // Contador para pessoas com 18 anos ou mais

    for (let i = 1; i <= 10; i++) {
        // Solicita a idade da pessoa
        let idade = parseInt(prompt(`Digite a idade da pessoa ${i}:`), 10);

        // Verifica se a idade é maior ou igual a 18
        if (idade >= 18) {
            contagem++;
        }
    }

    // Exibe o resultado
    alert(`Quantidade de pessoas com 18 anos ou mais: ${contagem}`);
}

// Chama a função para iniciar o processo
contarMaioridade();
