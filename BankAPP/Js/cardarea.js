document.getElementById("adicionarCompra").addEventListener("click", function () {
    // Criar um novo elemento div com a classe "compras"
    var novaCompra = document.createElement("div");
    novaCompra.classList.add("compras");

    var item = prompt('Item');
    var preco = prompt('Valor');

    // Adicionar o HTML desejado dentro do novo elemento div, usando os valores das variáveis item e preco
    novaCompra.innerHTML = `
        <h3 class="item">${item}</h3>
        <h3 class="preco">${preco}</h3>
    `;

    // Adicionar a nova compra dentro da tag main
    document.querySelector("main").appendChild(novaCompra);
});