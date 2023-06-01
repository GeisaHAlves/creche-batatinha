import {listagemService} from '../service/listagem-service.js'

const pegaURL = new URL(window.location);
console.log(pegaURL)

const id = pegaURL.searchParams.get('id');
console.log(id)

const resp = document.querySelector("#idNomeMiau");


listagemService.detalhaCliente(id)
.then(dados => {
    console.log(dados)
    resp.innerText = dados.nome
   
});






/*formulario.addEventListener('onload', (evento)=> {
    evento.preventDefault()
    const nome = evento.target.querySelector('#nomemiau').value
    resp.innerText = nome
    console.log(nome)
});*/