const produto ={
    nome: 'Caneta Bic Preta',
    preco: 1.9,
    desconto: 0.05
}

function clone(objeto) {
    return {...objeto}
}

const novoProduto = clone(produto)
novoProduto.nome = "Lapiseira"

console.log(produto)
console.log(novoProduto)