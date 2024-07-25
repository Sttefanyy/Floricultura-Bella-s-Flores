function Navegacao() {
  const html = {
    links: document.querySelectorAll('.tab-links button'),
    contents: document.querySelectorAll('.tab-contents section'),
    homeContent: document.querySelector('#produto'),
    containerTudo: document.querySelector('.containerTudo')
  };

  function OcultarContainer() {
    html.containerTudo.style.display = 'none';
  }



  function Ocultar() {
    html.contents.forEach(section => {
      section.style.display = 'none';
    });
  }

  function MostrarAtual(id) {
    const conteudo = document.querySelector("#" + id);
    if (conteudo) {
      conteudo.style.display = 'block';
      OcultarContainer();
    }
  }

  function Selecionar(evento) {
    Ocultar();
    MostrarAtual(evento.currentTarget.dataset.id);

    const Imagem = evento.currentTarget.dataset.imagem;
    const img2 = document.querySelector('.img2 img');
    img2.src = Imagem;

    html.links.forEach(tab => {
      tab.classList.remove('active');
    });
    evento.currentTarget.classList.add('active');
  }

  function VendoMudança() {
    html.links.forEach(tab => {
      tab.addEventListener('click', Selecionar);
    });
  }

  function iniciar() {
    Ocultar();
    VendoMudança();
  }

  return {
    iniciar
  };
}

const navegacao = Navegacao();
navegacao.iniciar();


