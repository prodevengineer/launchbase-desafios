const usuarios = [{
        nome: "Salvio",
        receitas: [115.3, 48.7, 98.3, 14.5],
        despesas: [85.3, 13.5, 19.9]
    },
    {
        nome: "Marcio",
        receitas: [24.6, 214.3, 45.3],
        despesas: [185.3, 12.1, 120.0]
    },
    {
        nome: "Lucia",
        receitas: [9.8, 120.3, 340.2, 45.3],
        despesas: [450.2, 29.9]
    }
]

// Percorra o array de usuários e para cada usuário
for (const usuario of usuarios) {
    const saldo = calculaSaldo(usuario.receitas, usuario.despesas)
    if (saldo > 0) {
        console.log(`${usuario.nome} possui saldo POSITIVO de ${saldo.toFixed(2)}`)
    } else {
        console.log(`${usuario.nome} possui saldo NEGATIVO de ${saldo.toFixed(2)}`)
    }
}

// chame uma função chamada calculaSaldo que recebe como parâmetro as receitas e despesas do usuário:
function calculaSaldo(receitas, despesas) {
    const totalReceitas = somaNumeros(receitas)
    const totalDespesas = somaNumeros(despesas)
    return totalReceitas - totalDespesas
}

// Crie uma segunda função que recebe como parâmetro um array de números e retorna a soma deles
function somaNumeros(numeros) {
    let soma = 0
        // Soma todos números dentro do array "numeros"
    for (const numero of numeros) {
        soma = soma + numero
    }
    return soma
}