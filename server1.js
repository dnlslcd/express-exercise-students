const express = require('express')

const app = express()

app.get('/', (req, res)=>{
    res.send(`<h1>El servidor funciona correctamente</h1> 
            <p>Aquí iría el contenido del mensaje</p>`)
})

app.use((req, res) => {
    res.status(404).send('Recurso no encontrado...')
  })

app.listen(3000, (req, res)=>{
  console.log('Servidor corriendo en el puerto 3000');
});