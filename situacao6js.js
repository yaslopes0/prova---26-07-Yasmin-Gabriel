function calcularSomas() {
    // Criação e leitura da matriz 5x5
    var matriz = [];
    for (var i = 0; i < 5; i++) {
        matriz[i] = [];
        for (var j = 0; j < 5; j++) {
            matriz[i][j] = parseInt(prompt(`Digite o elemento M[${i + 1}][${j + 1}]:`), 10);
        }
    }

    // Funções para calcular as somas
    function somaLinha(linha) {
        var soma = 0;
        for (var i = 0; i < 5; i++) {
            soma += matriz[linha][i];
        }
        return soma;
    }

    function somaColuna(coluna) {
        var soma = 0;
        for (var i = 0; i < 5; i++) {
            soma += matriz[i][coluna];
        }
        return soma;
    }

    function somaDiagonalPrincipal() {
        var soma = 0;
        for (var i = 0; i < 5; i++) {
            soma += matriz[i][i];
        }
        return soma;
    }

    function somaDiagonalSecundaria() {
        var soma = 0;
        for (var i = 0; i < 5; i++) {
            soma += matriz[i][4 - i];
        }
        return soma;
    }

    function somaTotal() {
        var soma = 0;
        for (var i = 0; i < 5; i++) {
            for (var j = 0; j < 5; j++) {
                soma += matriz[i][j];
            }
        }
        return soma;
    }

    // Calculando as somas
    var somaLinha4 = somaLinha(3); // Linha 4 é o índice 3
    var somaColuna2 = somaColuna(1); // Coluna 2 é o índice 1
    var somaDiagonalPrincipal = somaDiagonalPrincipal();
    var somaDiagonalSecundaria = somaDiagonalSecundaria();
    var somaTotal = somaTotal();

    // Exibindo os resultados
    var matrizString = matriz.map(function(row) {
        return row.join(' ');
    }).join('\n');

    alert(`Matriz M(5,5):\n${matrizString}`);
    alert(`Soma da linha 4: ${somaLinha4}`);
    alert(`Soma da coluna 2: ${somaColuna2}`);
    alert(`Soma da diagonal principal: ${somaDiagonalPrincipal}`);
    alert(`Soma da diagonal secundária: ${somaDiagonalSecundaria}`);
    alert(`Soma de todos os elementos: ${somaTotal}`);
}

// Chama a função para iniciar o processo
calcularSomas();
