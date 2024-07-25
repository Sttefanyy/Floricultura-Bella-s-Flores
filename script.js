let carrinho = [];

document.addEventListener("DOMContentLoaded", function() {
  const chatButton = document.getElementById("chat-button");
  const chatBox = document.getElementById("chat-box");
  const closeChatButton = document.getElementById("close-chat");

  chatButton.addEventListener("click", () => {
    if (chatBox.style.display === "none" || chatBox.style.display === "") {
      chatBox.style.display = "block";
      // Mensagem inicial da empresa
      const chatMessages = document.querySelector(".chat-messages");
      chatMessages.innerHTML = "Bem-vindo ao nosso chat! Por favor, digite o que deseja saber.";
    } else {
      chatBox.style.display = "none";
    }
  });

  closeChatButton.addEventListener("click", () => {
    chatBox.style.display = "none";
  });
});

let currentSlide = 0;

function changeSlide(n) {
  showSlide(currentSlide += n);
}

function showSlide(n) {
  const slides = document.querySelector('.slider2');
  const totalSlides = document.querySelectorAll('.products1').length;

  if (n > totalSlides - 1) {
    currentSlide = 0;
  } else if (n < 0) {
    currentSlide = totalSlides - 1;
  } else {
    currentSlide = n;
  }

  const translateValue = -currentSlide * 100 + '%';
  slides.style.transform = 'translateX(' + translateValue + ')';
}

showSlide(currentSlide);

//carrinho 


function adicionarItem(nome, preco) {

  carrinho.push({
    nome: nome,
    preco: preco
  });

  atualizarCarrinho();
}

function atualizarCarrinho() {
  const listaCarrinho = document.getElementById('carrinho-lista');
  const totalElement = document.getElementById('total');

  listaCarrinho.innerHTML = '';
  let total = 0;

  carrinho.forEach(item => {
    const listItem = document.createElement('li');
    listItem.className = 'carrinho-item';
    listItem.innerHTML = `${item.nome}: R$ ${item.preco.toFixed(2)}`;
    listaCarrinho.appendChild(listItem);

    total += item.preco;
  });

  totalElement.textContent = total.toFixed(2);
}

function limparCarrinho() {
  carrinho = [];
  atualizarCarrinho();
}
