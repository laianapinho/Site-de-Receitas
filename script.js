// localizar o botão "Ver receitas"
const botaoVerReceitas = document.querySelector('.btn-ver-receitas');

// garantir que o botão existe
if (botaoVerReceitas) {
  botaoVerReceitas.addEventListener('click', function (evento) {
    // impedir o comportamento padrão do link
    evento.preventDefault();

    // localizar a seção "Receitas"
    const secaoReceitas = document.querySelector('#receitas');

    // rolar a página suavemente até essa seção
    secaoReceitas.scrollIntoView({
      behavior: 'smooth'
    });
  });
}

// ================================
// FILTRO DE RECEITAS POR CATEGORIA
// ================================

// selecionar todos os itens da lista de categorias (li)
const categorias = document.querySelectorAll('.categorias li');

// selecionar todos os cards de receitas
const cards = document.querySelectorAll('.card');

// para cada categoria encontrada
categorias.forEach(function (categoria) {

  // adicionar um evento de clique em cada categoria
  categoria.addEventListener('click', function () {

    // pegar o nome da categoria clicada (ex: "Doces")
    const categoriaSelecionada = categoria.textContent.toLowerCase();

    // para cada card de receita
    cards.forEach(function (card) {

      // pegar a categoria da receita (definida no HTML com data-categoria)
      const categoriaDaReceita = card.getAttribute('data-categoria');

      // verificar se a categoria do card é igual à categoria clicada
      if (categoriaDaReceita === categoriaSelecionada) {

        // se for igual, mostrar o card
        card.style.display = 'block';

      } else {

        // se não for igual, esconder o card
        card.style.display = 'none';
      }

    });

  });

});
