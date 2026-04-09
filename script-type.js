//home
const homeEl = document.querySelector('#texto-que-muda');

if (homeEl) {
  new Typed('#texto-que-muda', {
    strings: [
      'Olá, seja bem-vindo!',
      'Eu me chamo Patrick.', 
      'Sou Desenvolvedor de Software', 
      'Foco em Python, FastAPI, AWS e JavaScript'
    ],
    typeSpeed: 40,
    backSpeed: 40,
    backDelay: 500,
    loop: true
  });
}

//projetos
const projEl = document.querySelector('#texto-que-muda-projetos');

if (projEl) {
  new Typed('#texto-que-muda-projetos', {
    strings: [
      'Aqui estão meus projetos'
    ],
    typeSpeed: 40,
    backSpeed: 40,
    backDelay: 500,
    loop: true
  });
}
