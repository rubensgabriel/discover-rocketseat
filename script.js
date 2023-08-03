function toggleMode () {
  const html = document.documentElement

  /*
  if(html.classList.contains('light')) {
    html.classList.remove('light')
  }
  else {
    html.classList.add('light')
  }
  */

  // Realiza a mesma função da condição
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute('src', 'assets/avatar 2.png')
  }
  else {
    img.setAttribute('src', 'assets/avatar.png')
  }

  // se tiver sem light mode, manter a imagem normal
}