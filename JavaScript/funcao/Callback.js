const calc = function (op, n1, n2) {
  return op(n1, n2)
}

const soma = function (n1, n2) {
  return n1 + n2
}

const sub = function (n1, n2) {
  return n1 - n2
}

const resultsoma = calc(soma, 1, 2)
const resultsub = calc(sub, 1, 2)

console.log(resultsoma)
console.log(resultsub)
