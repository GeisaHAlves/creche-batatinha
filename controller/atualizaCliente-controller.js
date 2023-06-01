import {listagemService} from '../service/listagem-service.js'

const pegaURL = new URL(window.location);
console.log(pegaURL)

const id = pegaURL.searchParams.get('id');
console.log(id)


const inputNome = document.querySelector('[data-nome]');
const inputDono = document.querySelector('[data-dono]');


listagemService.detalhaCliente(id)
.then(dados => {
    inputNome.value = dados.nome;
    inputDono.value = dados.nomeDono;
    console.log(dados)
   
});


const formulario = document.querySelector('[data-form]');

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();

    listagemService.atualizaCliente(id, inputNome.value, inputDono.value)
    .then(() => {
        return(alert("Dados cadastrados com sucesso!"))
    })
    
})




