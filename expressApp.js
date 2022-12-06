const { request } = require('express');
const express = require('express')
 
const mat = require('./mat.js');
const exemploAssincrono = require('./exemploAssincrono.js');
const arquivos = require('./modulo_arquivo.js');
const aluno = require ('./rotas/aluno_rotas');


const app = express()
const port = 3000
app.use(express.json());
app.use(express.urlencoded({extended:true}))


//Define local com arquivos estáticos
app.use(express.static('public'));




app.use(aluno);


app.get('/exemplo', (req, res) => {


    res.send('Hello World!')
})

app.post('/soma', (req, res) => {
    valor1 = +req.body.valor1;
    valor2 = +req.body.valor2;

    soma = mat.soma(valor1, valor2);
    res.send("Resultado : "+soma.toString());
})

app.get('/listaarquivos', (req, res) => {

  lista = arquivos.listarArquivos('arquivos');
  res.send("Lista de arquivos : "+lista);
})

app.get('/sinc', (req, res) => {
  let minhaHora = exemploAssincrono.getDataAtual();  
  res.send("Minha hora atual: "+minhaHora);
})

app.get('/assinc', (req, res) => {
  
  //dataAtual = exemploAssincrono.getDataAtual();
  exemploAssincrono.getDataSinc()
    .then(resultado => {
      res.send("Data atual promisse: "+resultado);
    })
    .catch(erro => {
      console.log("Promise rejeitada: " + erro);
      res.send(erro);
    })
})

app.get('/alunosassinc', (req, res) => {
  
  exemploAssincrono.lerArquivoJSONAssinc("./arquivosJSON/alunos.json")
      .then(resultado => {
        res.send("Alunos: "+resultado);
      })
      .catch(erro => {
        console.log("Promise rejeitada: " + erro);
        res.send(erro);
      })
})

app.get('/alunossinc', (req, res) => {
  
  let alunos = exemploAssincrono.lerArquivoJSONSinc("./arquivosJSON/alunos.json")
  res.send("Alunos: "+alunos);
      
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})