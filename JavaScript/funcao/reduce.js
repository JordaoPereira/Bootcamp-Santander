function reduceSoma(arr) {
  return arr.reduce(function (prev, current) {
    console.log({ prev })
    console.log({ current })
    return prev + current
  })
}

const arr = [1, 2]

// AO invés de eu utilizar o Arr como referenncia para busca, eu utilizei a própria lista para fazer a consulta.
const list = [
  {
    name: 'Sabao em po',
    preco: 25
  },
  {
    name: 'Suco de caxinha',
    preco: 25
  },
  {
    name: 'Shampoo',
    preco: 25
  }
]

const saldoDisponivel = 100

function calcSaldo(saldoDisponivel, list) {
  return list.reduce(function (prev, current, index) {
    console.log('rodada', index + 1)
    console.log({ prev })
    console.log({ current })
    return prev - current.preco
  }, saldoDisponivel)
}

console.log(calcSaldo(saldoDisponivel, list))
