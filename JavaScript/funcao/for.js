function multi(arr) {
  let multiplicados = []

  for (let i = 0; i < arr.length; i++) {
    multiplicados.push(arr[1] * 2)
  }

  return multiplicados
}

const meusNumeros = [2, 33, 456, 789]

multi(meusNumeros) //Multiplicados por dois
