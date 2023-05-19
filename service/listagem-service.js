
 const listaGatos = () => {
   return fetch(`http://localhost:3000/profile`)
   .then(resposta => {
    return resposta.json()
   })
}

const criaCliente = (nome, dono) => {
    return fetch(`http://localhost:3000/profile`, {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            dono: dono
        })
    })
    .then(resposta => {
        return resposta.body
    })
}

export const gatosService = {
    listaGatos, criaCliente
}



