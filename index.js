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
app.get('/commands', (req, res) => { res.render('commands'); });
app.get('/coming-soon', (req, res) => { res.send('This thing is coming soon lol') });
app.get('/bot-private-info.json', (req, res) => { res.send('<img src="https://tenor.com/view/rickroll-roll-rick-never-gonna-give-you-up-never-gonna-gif-22954713" alt="reload the page">') })

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`La aplicación está escuchando en el puerto ${port}`);
});
