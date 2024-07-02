const express = require('express')
// const path = require('path');
const app = express()

app.use(express.static('public'));

app.get('/team', (req,res)=>{
  res.sendFile(__dirname + '/server3-files/team.html');
});

app.get('/about', (req,res)=>{
  res.sendFile(__dirname + '/server3-files/about.html');
  // const url = path.join(__dirname, 'server3-files', 'about.html');
  // res.sendFile(url);
});

app.use('*', (req, res) => {
    res.status(404).send('Recurso no encontrado...')
  })

app.listen(3000, (req, res)=>{
  console.log('Servidor 3 corriendo en el puerto 3000')
});