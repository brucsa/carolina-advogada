// Seleciona o botão e o menu
const botaoHamburguer = document.querySelector('.menu-hamburguer');
const menu = document.querySelector('.menu');

// Adiciona um evento de clique ao botão
botaoHamburguer.addEventListener('click', () => {
  // Alterna a classe 'active' no menu e no botão
  menu.classList.toggle('active');
  botaoHamburguer.classList.toggle('active');
});