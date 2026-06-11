//Exercicio 1
let numeros = [-5, 10, -2, 15, -1, 3, 20, 60, -8, 25, 12]
let filtrarNumeros = numeros.filter(numero =>
    numero > 0
)
console.log(filtrarNumeros)

//Exercicio 2
let nomes = ["giovany", "oton", "aline"]
let nomesMaiusculo = nomes.map(nome => nome.charAt(0).toLocaleUpperCase() + nome.slice(1))
console.log(nomesMaiusculo)

//Exercicio 3
let usuarios = [
    { nome: "Giovany", id: 1 },
    { nome: "Carlos", id: 2 },
    { nome: "Lucia", id: 3 },
    { nome: "Vitoria", id: 4 },
]

let buscarusuario = usuarios.find(usuario => usuario.id == 3)
console.log(buscarusuario)

//Exercicio 4
let produtos = [
    { nome: "Celular Samsung", preco: 2500 },
    { nome: "Celular Motorola", preco: 1500 },
    { nome: "Celular Xiaomi", preco: 1300 },
]
let produtosComImposto = produtos.map(produto => {
    return {
        nome: produto.nome,
        preco: (produto.preco * 1.15).toFixed(2)
    };
});

console.log(produtosComImposto);

//Exercicio 5
let tamanhoNome = nomes.map(nome => {
    return `o nome ${nome} tem ${nome.length} letras`
})
console.log(tamanhoNome)

//Exercicio 6
let filtrarNumerosCondicional = numeros.filter(numero => numero > 10 && numero < 50).sort()
console.log(filtrarNumerosCondicional)

//Exercicio 7
let somarPrecos = produtos.reduce((soma, produto) => soma + produto.preco, 0)
console.log(somarPrecos)

//Exercicio 8
let tipoUsuario = ["Local", "Local", "Normal", "Admin"]
let verificarUsuario = tipoUsuario.some(usuario => usuario == "Admin")
console.log(verificarUsuario)

//Exercicio 9

let verificarNumerosPositivos = numeros.every(numero => numero > 0)
console.log(verificarNumerosPositivos)

//Exercicio 10
let produtosEletronicos = ["Mouse", "Teclado"]
let lista = produtosEletronicos.map(nome => ({ nome, categoria: "Periféricos" }));
console.log(lista);