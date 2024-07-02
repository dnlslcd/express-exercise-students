const express = require('express')

const app = express()

app.use(express.static('public'));

app.get('/team', (req,res)=>{
  res.sendFile(__dirname + '/server3-files/team.html');
});

app.get('/about', (req,res)=>{
  res.sendFile(__dirname + '/server3-files/about.html');
});

app.use('*', (req, res) => {
    res.status(404).send('Recurso no encontrado...')
  })

app.listen(3000, (req, res)=>{
  console.log('Servidor corriendo en el puerto 3000')
});