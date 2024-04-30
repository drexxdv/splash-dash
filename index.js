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

const { GatewayIntentBits, Client } = require('discord.js');

const client = new Client({ intents: GatewayIntentBits.Guilds });

app.get('/api/servers', (req, res) => {
  const servers = client.guilds.cache.array().map(guild => ({
    id: guild.id,
    name: guild.name,
  }));
  res.json(servers);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`La aplicación está escuchando en el puerto ${port}`);
});

client.login('MTIyMDA0NTUxNDY0MTM3NTIzMg.GVBIwZ.l0i-tWyuDLMOcoJ8w_QrImgg2YvbEhRbr9Thes')

