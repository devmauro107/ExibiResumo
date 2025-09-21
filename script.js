function calculadoraTotal(precoUnitario, quantidade) {
    return precoUnitario * quantidade;
}

function aplicarDesconto(valorTotal) {
    if (valorTotal > 100) {
        return valorTotal * 0.9;
    } else {
        return valorTotal;
    }
}

let preço = 30;
let quantidade = 4;

let total = calculadoraTotal(preço, quantidade);
    console.log ("Valor total da compra: R$" + total.toFixed(2));

let totalComDesconto = aplicarDesconto(total);
    console.log ("Valor total com desconto: R$" + totalComDesconto.toFixed(2));