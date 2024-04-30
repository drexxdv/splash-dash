const express = require('express');
const app = express();
const ejs = require('ejs');
const path = require('path');

// Asumiendo que tu archivo app.js se encuentra en la raíz del proyecto
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
  res.render('home');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`La aplicación está escuchando en el puerto ${port}`);
});
