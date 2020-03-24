const express = require('express');
const app = express();


app.get('/', (req,res,next)=>{
  res.json({mensagem: 'Olá Mundo'})
})
app.listen(3001, ()=> {
  console.log('ta rodando mano!')
})