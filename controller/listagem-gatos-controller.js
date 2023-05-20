//------ 1° Criar estrutura html que sera alimentada pela API --------------------------------------
import { listagemService } from "../service/listagem-service.js";
const criaNovaLinha = (nome, nomeDono) => {

    const linhaNovoGato = document.createElement('tr')
    const conteudo =`
   <div class="adiciona-miau">
   <div class="dados-miau">
     <img src="../assets/img/ava (1).png" alt="">
     <th> Nome Gato: </th> </br>
    <td class="linhaGato">${nome}</td>
    <th> Nome Dono: </th></br>
    <td class="linhaGato">${nomeDono}</td>
  </div>
  <button class="botao-notas">
  <a href="../telas/notas.html" class="textoBotao">Lançar notas</button></a>
  </div>
          `
          linhaNovoGato.innerHTML = conteudo
          return linhaNovoGato
}

//------ 2° Ligar o id da tabela que esta no nosso html com esse que criamos no JS --------------------------------------
const tabela = document.querySelector('#data-listagem') 

//-------- 4° Pegar os DADOS e EXIBIR NA TELA
listagemService.listaGatos()
.then(dados => {
   dados.forEach(elemento => {
   tabela.appendChild(criaNovaLinha(elemento.nome, elemento.nomeDono)) 
   })

})
