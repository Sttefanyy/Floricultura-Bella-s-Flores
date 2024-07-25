function acao(iniciar) {

  let modal = iniciar.nextElementSibling;

  modal.style.display = 'block';
}

function fechar(Fechar) {

  let modal = Fechar.parentElement;

  modal.style.display = 'none';
}