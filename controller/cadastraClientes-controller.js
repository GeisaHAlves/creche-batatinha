import { listagemService } from "../service/listagem-service.js";

const formulario = document.querySelector('[data-form]')

formulario.addEventListener('submit', (evento)=> {
    evento.preventDefault()
    const nome = evento.target.querySelector('#nomemiau').value
    const nomeDono = evento.target.querySelector('#pessoadona').value
    

    listagemService.criaMiau(nome, nomeDono)
    .then(()=>{
        return(
        alert('Seu Miau foi cadastrado com SUCESSO <3'))
    })
})