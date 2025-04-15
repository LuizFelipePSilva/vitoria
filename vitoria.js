// Array de fotos (adicione seus caminhos de imagem)
const fotos = ["foto1.jpg", "foto2.jpg", "foto3.jpg"];

// Efeito de Digitação Melhorado
const textos = [
  "Aparenta um jeito bruto, porém expressa uma delicadeza com quem valoriza",
  "Gosta de saber das coisas, não esconda nada dela",
  "Tímida no começo, mas com o tempo se solta e mostra sua verdadeira essência",
  "Enfim, ",
];

let linha = 0;
let indice = 0;
const elementoTexto = document.querySelector(".texto-digitando");

function digitar() {
  if (indice < textos[linha].length) {
    elementoTexto.innerHTML += textos[linha].charAt(indice);
    indice++;
    setTimeout(digitar, 50);
  } else {
    setTimeout(apagar, 2000);
  }
}

function apagar() {
  if (indice > 0) {
    elementoTexto.innerHTML = textos[linha].substring(0, indice - 1);
    indice--;
    setTimeout(apagar, 30);
  } else {
    linha = (linha + 1) % textos.length;
    setTimeout(digitar, 500);
  }
}

// Galeria de Fotos
function criarGaleria() {
  const faixa = document.querySelector(".faixa-galeria");
  const fotosDuplicadas = [...fotos, ...fotos];

  fotosDuplicadas.forEach((foto) => {
    const img = document.createElement("img");
    img.src = foto;
    img.alt = "Nossa memória";
    img.classList.add("foto-memoria");
    faixa.appendChild(img);
  });
}

// Lightbox
document.querySelectorAll(".foto-memoria").forEach((foto) => {
  foto.addEventListener("click", () => {
    document.getElementById("lightbox-imagem").src = foto.src;
    document.getElementById("lightbox").style.display = "block";
  });
});

document.querySelector(".fechar-lightbox").addEventListener("click", () => {
  document.getElementById("lightbox").style.display = "none";
});

document.getElementById("lightbox").addEventListener("click", (e) => {
  if (e.target !== document.getElementById("lightbox-imagem")) {
    document.getElementById("lightbox").style.display = "none";
  }
});

// Sistema de Corações
function criarCoracoes() {
  const container = document.querySelector(".coracoes-flutuantes");
  for (let i = 0; i < 20; i++) {
    const coracao = document.createElement("div");
    coracao.className = "coracao-flutuante";
    coracao.style.left = Math.random() * 100 + "vw";
    coracao.style.animation = `flutuar ${Math.random() * 3 + 2}s infinite`;
    coracao.innerHTML = "💜";
    container.appendChild(coracao);
  }
}

// Efeito Neve
function criarNeve() {
  const container = document.querySelector(".neve");
  for (let i = 0; i < 50; i++) {
    const floco = document.createElement("div");
    floco.className = "floco";
    floco.style.left = Math.random() * 100 + "vw";
    floco.style.animationDuration = Math.random() * 3 + 2 + "s";
    floco.style.opacity = Math.random();
    container.appendChild(floco);
  }
}

// Confetes Interativos
document.addEventListener("click", function (e) {
  if (e.target.closest(".botao-magico")) return;

  for (let i = 0; i < 20; i++) {
    const confete = document.createElement("div");
    confete.className = "confete";
    confete.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    confete.style.left = e.pageX + "px";
    confete.style.top = e.pageY + "px";
    confete.style.animation = `explodir ${Math.random() * 0.5 + 0.5}s ease-out`;
    document.body.appendChild(confete);

    setTimeout(() => confete.remove(), 1000);
  }
});

// Inicialização
document.addEventListener("DOMContentLoaded", () => {
  digitar();
  criarGaleria();
  criarNeve();
  criarCoracoes();

  document.getElementById("btnTema").addEventListener("click", () => {
    document.body.classList.toggle("modo-noturno");
  });

  document.getElementById("btnGaleria").addEventListener("click", () => {
    const galeria = document.querySelector(".galeria-infinita");
    galeria.classList.toggle("escondido");
  });

  document.getElementById("btnCarta").addEventListener("click", () => {
    const carta = document.querySelector(".carta-poema");
    carta.classList.toggle("escondido");
    document.querySelector(".texto-carta").innerHTML = gerarPoema();
  });

  setTimeout(() => {
    document.querySelector(".animacao-entrada").remove();
  }, 2000);
});

function gerarPoema() {
  return "Feliz aniversário, Vitória, uma pessoa que do nada nos conhecemos. De lá pra cá, muitas conversas, brincadeiras e vivências. No começo, aparentava ser tímida, porém já expressava seu jeitinho — uma pessoa meiga, gentil e delicada, sempre brincando e tudo. Tem um pouquinho de raiva (contém ironia). Uma conexão que se instaurou e, de lá pra cá, não paramos mais de nos falar. Bem, um pouco mais de 1 mês de conversas já, parece que foi há mais tempo, parece que nos conhecemos há bem mais tempo. Porém, já tínhamos nos visto — eu mesmo não lembrava, mas você lembrou que já fui te deixar na Geovana e tudo mais. Pra ser bem sincero, uma coisa que te descreve é o seu jeito, que só quem te conhece sabe. Enfim, desejo um belo dia. 19 anos, né princesa? Um beijo, um cheiro e fique bem. Essa é a surpresa que eu fiz, espero que goste. Parabéns!";
}
