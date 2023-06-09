const addressAPI =
  "https://backend-desenvolve-boticario-json-server.vercel.app";

//endereço de produção: https://backend-desenvolve-boticario-json-server.vercel.app
//endereço de desenvolvimento: http://localhost:3000

//------ 3° abrir conexao servidor com metodo fetch (FUNÇÃO GET)
export const listaGatos = () => {
  return fetch(`${addressAPI}/gato`).then((resposta) => {
    return resposta.json();
  });
};

//c

const criaMiau = (nome, nomeDono, id) => {
  return fetch(`${addressAPI}/gato`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nome: nome,
      nomeDono: nomeDono,
      id: id,
    }),
  }).then((resposta) => {
    return resposta;
  });
};

//------ 5° Apagar dados do formulario (FUNÇÃO DELETE)
const deletaMiau = (id) => {
  return fetch(`${addressAPI}/gato/${id}`, {
    method: "DELETE",
  });
};

// 7° Arquivo de edição. Essa constante será utilizada no arquivo atualizaCLiente-controller

const detalhaCliente = (id) => {
  return fetch(`${addressAPI}/gato/${id}`).then((resposta) => {
    return resposta.json();
  });
};

//------ 8° Editar dados ao formulário cadastrar cliente (FUNÇÃO PUT)
const atualizaCliente = (id, nome, nomeDono) => {
  return fetch(`${addressAPI}/gato/${id}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      nome: nome,
      nomeDono: nomeDono,
    }),
  }).then((resposta) => {
    return resposta.json();
  });
};

export const listagemService = {
  listaGatos,
  criaMiau,
  deletaMiau,
  detalhaCliente,
  atualizaCliente,
};

// -----------------------CODIGO ABAIXO FEITO COM PROMISSE (FORMA ANTIGA) DE RETORNAR UMA A.P.I -------------
//     const promise = new Promise((resolve, reject) => {
//         const http = new XMLHttpRequest()

//         //-------- 3° abrir conexao servidor com metodo open, dizendo get(pegar) do  localhost da minha api criada dbgatos--------
//             http.open('GET', 'http://localhost:3000/gato')

//         //metodo onload ao carregar a pagina vai realizar essa função e For Each para criar cada elemento como filho da nossa tabela-----------
//             http.onload = () => {
//                if(http.status >= 400){
//                 reject(JSON.parse(http.response))
//                }else{
//                 resolve(JSON.parse(http.response))
//                }
//             }
//             http.send()
//     })
//    return promise
// ------------------------FINAL CODIGO FEITO COM PROMISSE (FORMA ANTIGA)-------------------------------------------------
