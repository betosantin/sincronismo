// function enviarEmail(corpo, para, callback){
//     setTimeout(()=>{
//         console.log(`Para: ${para}
//         --------------------------
//         ${corpo}
//         --------------------------
//         De: Roberto Santin`);

//         var deuErro = true;

//         if(deuErro){
//             callback(para, "Envio do e-mail falhou");
//         } else {
//             callback(para);
//         }

//     }, 8000);
// }

// console.log("Início envio e-mail");
// enviarEmail("Olá, seja bem vindo.", 
//     "teste@teste.com", (para, erro)=> {

//         if(erro == undefined){
//             console.log("E-mail enviado para: " + para);
//             console.log("Tudo ok!");
//         } else {
//             console.log(erro);
//         }
//     });


function enviarEmailPromise(corpo, para) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Enviando e-mail.")
            var deuErro = false;
            if (!deuErro) {
                resolve({ time: 4, to: para })
            } else {
                reject("Erro, e-mail não enviado");
            }

        }, 4000);
    })
}

function pegarId() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve({ id: 5 });
        }, 1500);
    })
}

function buscarEmailBanco(id) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (id == 5) {
                resolve("teste@teste.com");
            } else {
                resolve("teste2@teste.com");
            }

        }, 2000)

    });
}

// enviarEmailPromise("Teste", "teste@gmail.com").then(
//     (dados) => {
//         console.log("Sucesso, executado em: " + dados.time + " segundos, enviado para: " + dados.to);
//     }
// ).catch((erro) => {
//     console.log(erro);
// })

//Não é uma boa pratica
// pegarId().then((id)=>{
//     buscarEmailBanco(id).then((email)=>{
//         enviarEmailPromise("Testando", email).then((dados)=>{
//             console.log("Sucesso, executado em: " + dados.time + " segundos, enviado para: " + dados.to);
//         }).catch(erro =>{
//             console.log(erro);
//         })
//     })
// })

async function principal() {
    var id = await pegarId();
    var email = await buscarEmailBanco(id);

    try {
        var dados = await enviarEmailPromise("Testando", email);
        console.log("Sucesso, executado em: " + dados.time + " segundos, enviado para: " + dados.to);
    } catch (erro) {
        console.log(erro);
    }
}

principal();
