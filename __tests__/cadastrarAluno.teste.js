const request = require('supertest');
const express = require('express')
const app = express()
app.use(express.json());
app.use(express.urlencoded({extended:true}))
 

const baseURL ='http://localhost:3000/';

it('Cadastrar aluno no sistema', (done)=>{
    

request(baseURL)
  .get('/aluno')
  .expect(200)
  .expect('Content-Type', 'application/json')
  .end(function(err, res) {
        if (err) throw err;
        console.log(res.body);
  });
  
});