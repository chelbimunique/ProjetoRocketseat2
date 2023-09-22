function toggleMode () {
  const html =
    document.documentElement /*documentElement é o HTML, document é a representação do documento em formato de objeto javascript, sempre que colocar um pontinho estará acessando propriedades e funcionalidades*/

  //if(html.classList.contains('light')) {
  //  html.classList.remove('light') /*remove o light*/
  //} else {
  // html.classList.add('light') /*adiciona o light*/
  //}

  html.classList.toggle("light") //o toggle faz o alternado sozinho, sem precisar do if

  // pegar a tag img
  const img = document.querySelector("#profile img") /*pesquina pelo seletor*/

  //substituir a imagem
  if (html.classList.contains("light")) {
    //se estiver com light mode, adicionar a imagem light
    img.setAttribute('src', './assets/avatar-light.png') /*para modificar um atributo*/
  } else {
    //se estiver sem light mode, manter a imagem normal
    img.setAttribute('src', './assets/avatar.png')
  }

  //substituir a descrição da foto
  if (html.classList.contains("light")) {
    //se estiver com light mode, adicionar outra descrição
  img.setAttribute('alt', "Foto de Mayk Brito usando óculos escuros e jaqueta preta, com fundo gradual de violeta para azul")
  } else {
    //se estiver sem light mode, manter a descrição normal
  img.setAttribute('alt', "Foto de Mayk Brito usando óculos e camisa preta, com barba e fundo amarelo")
  }
}