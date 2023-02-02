const { request } = require('express');
const express = require('express')
 
const aluno = require ('./rotas/aluno');

const app = express()
const port = 3000
app.use(express.json());
app.use(express.urlencoded({extended:true}))

//Define local com arquivos estáticos
app.use(express.static('public'));

app.use(aluno);

app.get('/status', (req, res) => {
  res.send(`Sistema de informação funcionando na porta: ${port}`)
})

app.listen(port, () => {
  console.log(`Sistema de informação funcionando na porta: ${port}`)
})