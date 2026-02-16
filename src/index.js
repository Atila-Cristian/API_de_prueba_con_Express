import 'dotenv/config';
import express from 'express'
import routesMascotas from '../routes/mascotas.js'
const app = express();

app.use('/mascotas', routesMascotas)

// la app esta escuchando en el puerto 3000
app.listen(3000, () => {
  console.log('servidor activo')
});





