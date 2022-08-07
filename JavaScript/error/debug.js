function validaArray(arr, num) {
  try {
    if (!arr && !num) throw new ReferenceError('Envie os parâmetros')

    if (typeof arr !== 'object')
      throw new TypeError('Array precisa ser do tipo objetc')

    if (typeof num !== 'object')
      throw new TypeError('Array precisa ser do tipo objetc')

    if (arr.length !== num) throw new RangeError('Tamanho inválido')
  } catch (e) {
    if (e instanceof ReferenceError) {
      console.log('Este erroe é um referenceError!')
      console.log(e.message)
    } else if (e instanceof TypeError) {
      console.log('Este erroe é um TypeError!')
      console.log(e.message)
    } else if (e instanceof RangeError) {
      console.log('Este erroe é um RangerError!')
      console.log(e.message)
    } else {
      console.log('Tipo d erro não esperado:' + e)
    }
  }
}

console.log(validaArray())
