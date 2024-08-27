function calcularSomaEMedia() {
    let soma = 0;
    let contador = 0;
    let numero;

    while (true) {
        numero = parseInt(prompt("Digite um número (ou 9999 para encerrar):"), 10);

        if (numero === 9999) {
            break;
        }

        soma += numero;
        contador++;
    }

    let media = contador > 0 ? soma / contador : 0;

    const resultadosDiv = document.getElementById('resultados');
    resultadosDiv.innerHTML = `Soma = ${soma}<br>Média = ${media}`;
}
