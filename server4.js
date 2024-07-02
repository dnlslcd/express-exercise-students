const express = require('express')


const app = express()

app.use(express.static('public'));

const palindrome = require('./utils/palindrome');

app.get('/check/:word', (req,res)=>{
  const {word} = req.params;
  const isPalindrome = palindrome.palindrome(word);
  res.send(isPalindrome ? 'Es un palíndromo' : 'NO es un palíndromo');
});

app.use((req, res) => {
    res.status(404).send('Recurso no encontrado...')
  })

app.listen(3000, (req, res)=>{
  console.log('Servidor 4 corriendo en el puerto 3000')
});