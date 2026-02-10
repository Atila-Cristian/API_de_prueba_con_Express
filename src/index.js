import express from 'express'
const app = express();


app.get('/', (req, res) => {

  res.send('Hola Mundo')

})


// la app esta escuchando en el puerto 3000
app.listen(3000, () => {
  console.log('servidor activo')
});



