function comprar() {
    let quantidade = parseInt(document.getElementById('qtd').value);
    let tipoIngresso = document.getElementById('tipo-ingresso');

    if (tipoIngresso.value == 'pista') {
        comprarPista(quantidade);
    }
    if (tipoIngresso.value == 'inferior') {
        comprarInferior(quantidade);
    }
    if (tipoIngresso.value == 'superior') {
        comprarSuperior(quantidade);
    }
}
function comprarPista(quantidade) {
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    if (quantidade > qtdPista) {
        alert('Quantidade indisponível para tipo pista');
    }
    else {
        qtdPista = qtdPista - quantidade;
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert('Compra realizada com sucesso!');
    }
}
function comprarInferior(quantidade) {
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if (quantidade > qtdInferior) {
        alert('Quantidade indisponível para tipo inferior');
    }
    else {
        qtdInferior = qtdInferior - quantidade;
        document.getElementById('qtd-inferior').textContent = qtdInferior;
        alert('Compra realizada com sucesso!');
    }
}
function comprarSuperior(quantidade) {
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if (quantidade > qtdSuperior) {
        alert('Quantidade indisponível para tipo superior');
    }
    else {
        qtdSuperior = qtdSuperior - quantidade;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
        alert('Compra realizada com sucesso!');
    }
}