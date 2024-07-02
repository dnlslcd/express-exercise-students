const express = require('express')

const app = express()



app.use((req, res) => {
    res.status(404).send('Recurso no encontrado...')
  })

app.listen(3000, (req, res)=>{
  res.send(`<h1>El servidor funciona correctamente</h1> 
            <p>Aquí iría el contenido del mensaje</p>`)
});