// A Função abaixo testa o clique do botão
/* function changeMode() {
  console.log('cliquei')
}*/
function changeMode() {
  changeClasses()
  changeText()
}

function changeClasses() {
  button.classList.toggle('darkModeClass')
  h1.classList.toggle('darkModeClass')
  body.classList.toggle('darkModeClass')
}

function changeText() {
  const lightMode = 'Ligh Mode'
  const darkMode = 'Dark kMode'

  if (body.classList.contains('darkModeClass')) {
    button.innerHTML = lightMode
    h1.innerHTML = darkMode + 'ON'
    return
  }

  button.innerHTML = darkMode
  h1.innerHTML = lightMode + 'ON'
}

const darkModeClass = 'dark-mode'
const button = document.getElementById('mode-selector')
const h1 = document.getElementById('on')
const body = document.getElementById('dark-mode'[0])

button.addEventListener('click', changeMode)
