const { Client, Intents } = require('discord.js');
const fs = require('fs');
const commandHandler = require('./handler/commandHandler');
const eventHandler = require('./handler/eventHandler');
const client = new Client({ intents: [3276799] });
require('dotenv').config(); // Memuat variabel lingkungan dari file .env


client.commands = new Map();

// Command Handler
commandHandler(client);

// Event Handler
eventHandler(client);

// Login to Discord
client.login(process.env.TOKEN)
    .then(() => console.log(`Logged in as ${client.user.tag}!`))
    .catch(error => console.error('Failed to login:', error));
