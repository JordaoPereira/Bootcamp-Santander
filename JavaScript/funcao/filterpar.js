function filterPares(arr) {
  return arr.filter(callback)
}

function callback(item) {
  return item % 2 === 0
}

const meuArray = [2, 4, 6, 3, 5, 1]

console.log(filterPares(meuArray))
