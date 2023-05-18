import { gatosService } from "../service/listagem-service.js"

const criaNovaLinha = (nome, dono) => {
    const linhaNovoGato = document.createElement('div')
    linhaNovoGato.classList = "dados-miau"
    const conteudo = `
        <div class="dados-miau">
        <img src="../assets/img/ava (1).png" alt="">
        <div>
        <p>Nome: ${nome}</p>
        <p>Dono(a): ${dono}</p>
        </div>
        </div>
        <button class="botao-notas">
        <a href="../telas/notas.html" class="textoBotao">Lançar notas</button></a>
        `
    linhaNovoGato.innerHTML = conteudo
    return linhaNovoGato
}

const adicionaElemento = document.querySelector('#data-listagem');

gatosService.listaGatos ()
.then(data => {
    
            data.forEach(elemento => {
                adicionaElemento.appendChild(criaNovaLinha(elemento.nome, elemento.dono))
            })
})