import { gatosService } from "../service/listagem-service.js";


const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = e.target.querySelector('#nomemiau').value;
    const dono = e.target.querySelector('#pessoadona').value

    gatosService.criaCliente(nome, dono)
    .then(() => {
        window.location.href = '../telas/listagem.html'
    })
})