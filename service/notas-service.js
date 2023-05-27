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

   const conteudo = document.querySelector("#conteudo") 

//conf do arquivo final PDF - biblioteca html2pdf.js
const configuracao = {

    filename: "notas.pdf",
    html2canvas: {scale:2},
    jsPDF: {unit: "in", format: "a4", orientation: "portrait"}
}

//Gerar e baixar PDF
html2pdf().set(configuracao).from(conteudo).save();
});