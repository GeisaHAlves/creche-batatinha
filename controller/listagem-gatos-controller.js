//------ 1° Criar estrutura html que sera alimentada pela API --------------------------------------
import { listagemService } from "../service/listagem-service.js";
const criaNovaLinha = (nome, nomeDono,id) => {
    const linhaNovoGato = document.createElement('div')
    const conteudo =`
   
   <div class="adiciona-miau">
   <div class="dados-miau">
    <img src="../assets/img/ava (1).png" alt="">
    <td>Nome:</th>
    <td data-td class="linhaGato" >${nome}</td>
    </br>
    <td>Dono: </th>
    <td class="linhaGato" >${nomeDono}</td>
  </div>
  <div>
  <button class="botao-notas">
  <a href="../telas/notas.html?id=${id}" class="textoBotao">Lançar notas</button></a>
  <button class="botao-notas">
  <a href="../telas/edicao.html?id=${id}" class="textoBotao">Editar</button></a>
  <button class="botao-excluir"> Excluir </button>
  </div>
  </div>
  
          `
   linhaNovoGato.innerHTML = conteudo;
   linhaNovoGato.dataset.id = id;
   
   return linhaNovoGato
   
}

//------ 2° Ligar o id da tabela que esta no nosso html com esse que criamos no JS --------------------------------------
const tabela = document.querySelector('#data-listagem') 

//-------- 3° Deletar cliente

tabela.addEventListener('click', (evento) => {
 let ehBotaoDeletar = evento.target.className == 'botao-excluir'

 if(ehBotaoDeletar){
   const linhaGato = evento.target.closest('[data-id');
   let id = linhaGato.dataset.id
   listagemService.deletaMiau(id)
   .then(() => {
    linhaGato.remove()
   })
 }
})

//-------- 4° Pegar os DADOS e EXIBIR NA TELA
listagemService.listaGatos()
.then(dados => {
   dados.forEach(elemento => {
   tabela.appendChild(criaNovaLinha(elemento.nome, elemento.nomeDono, elemento.id)) 
   })

})



