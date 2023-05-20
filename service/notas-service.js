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