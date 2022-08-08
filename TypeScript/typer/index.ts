function addList<T>(array: any[], valor: number) {
  return array.map(item => item + valor)
}

addList([1,2,3], 1)