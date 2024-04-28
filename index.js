const express = require('express');
const app = express();

app.get('/', async (res, req) => {
  res.send('Servidor llamando a usuario, estas ahi?')
})
