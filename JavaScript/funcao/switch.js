function getAnimal(id) {
  switch (id) {
    case 1:
      return 'Cão'
    case 2:
      return 'gato'
    case 3:
      return 'Pássaro'
    default:
      return 'peixe'
  }
}

getAnimal(1)
getAnimal(4)
getAnimal('1')
