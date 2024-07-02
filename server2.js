const express = require('express')

const app = express()

app.get('/mensaje', (req,res)=>{
  res.send('mensaje');
});

app.use('*', (req, res) => {
    res.status(404).send('Recurso no encontrado...')
  })

app.listen(3000, (req, res)=>{
  console.log('Servidor 2 corriendo en el puerto 3000')
});