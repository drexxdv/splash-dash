const { Client, Events, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent
  ]
});

client.login('MTIyMDA0NTUxNDY0MTM3NTIzMg.GVBIwZ.l0i-tWyuDLMOcoJ8w_QrImgg2YvbEhRbr9Thes')
