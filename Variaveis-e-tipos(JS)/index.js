//Solução 1

function veriP(string) {
  if (!string) return 'String inexistente'

  string.split('').reverse().join('') === string
}

console.log(veriP('ovo'))
