let trocaImagem = document.querySelectorAll(".pata-cinza");

document.addEventListener("click", function(e){
    let pataColorida = e.target.classList;
    if(!pataColorida.contains('rosa')){
        trocaImagem.forEach(function(pata){
            pata.classList.remove('rosa');
        })
        pataColorida.add('rosa')
    }
})






// const trocaImagemNotaUm = document.querySelector("[data-nota]");

// trocaImagemNotaUm.addEventListener("click", () => {
//     trocar();
// });

// const trocaImagemNotaDois = document.querySelector("[data-nota]");

// trocaImagemNotaDois.addEventListener("click", () => {
//     trocar();
// });

// const trocaImagemNotaTres = document.querySelector("[data-nota]");

// trocaImagemNotaTres.addEventListener("click", () => {
//     trocar();
// });

// const trocaImagemNotaQuatro = document.querySelector("[data-nota]");

// trocaImagemNotaQuatro.addEventListener("click", () => {
//     trocar();
// });

// const trocaImagemNotaCinco = document.querySelector("[nota-cinco]");

// trocaImagemNotaCinco.addEventListener("click", () => {
//     trocar();
// });

// let trocaImagem = document.querySelector('.pata-cinza')
// function trocar() {
//     const imagem = trocaImagem.getAttribute("src");
//     if (imagem === "../assets/img/patinha.jpg") {
//         trocaImagem.setAttribute("src", "../assets/img/patinhaRosa.png");
//     } else {
//         trocaImagem.setAttribute("src", "../assets/img/patinhaRosa.jpg");
//     }
// }

