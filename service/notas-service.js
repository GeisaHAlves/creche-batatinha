/*import { listagemService } from "../service/listagem-service";

const pegaURL = new URL(window.location);

console.log(pegaURL)

const id = pegaURL.searchParams.get('id');

const resp = document.querySelector('#idNomeMiau')

listagemService.detalhaCliente(id)
.then(dados => {
    resp.innerText = dados.nome;
    console.log(dados)
})*/


function aplicarNota(id, nota){

    /**Removendo todas as notas */   
    for (let index = 1; index <= 5; index++) {
        const imagem = document.getElementById(`${id}-pata-${index}`);
        imagem.src = "../assets/img/patinha.jpg";
    }


    /**Aplicando as notas de acordo com atributo nota */   
    for (let index = 1; index <= nota; index++) {
        const imagem = document.getElementById(`${id}-pata-${index}`);        
        imagem.src = "../assets/img/patinhaRosa.jpg";
    }   
    
}
//*****  Imprimir boletim */

const botaoImprimir = document.querySelector("#imprimir-pdf");

botaoImprimir.addEventListener("click", ()=>{

   const conteudo = document.querySelector('body') 

//conf do arquivo final PDF - biblioteca html2pdf.js
const configuracao = {
    
    filename: "notas.pdf",
    html2canvas: {scale:3},
    jsPDF: {unit: "mm", format: "a4", orientation: "portrait"}
}

//Gerar e baixar PDF
html2pdf().set(configuracao).from(conteudo).save();
});