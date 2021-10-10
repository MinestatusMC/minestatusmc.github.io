// Dependencies
const Discord = require('discord.js');
const client = new Discord.Client();
const fetch = require('node-fetch');
const { ip, token } = require('./config.json');

// Initial bot settings
var url = 'https://mcapi.xdefcon.com/server/' + ip + '/full/json';
var status = 'Server offline';

// Fetch server stats
function update() {
    fetch(url).then(response => {
        return response.json()
    }).then(data => {
        if(data.serverStatus == "offline") {
            console.log(status);
            client.user.setStatus('dnd');
            client.user.setActivity(status, { type: 'PLAYING' });
        } else if(data.serverStatus == "online") {
            status = data.players + ' of ' + data.maxplayers;
            console.log(data.motd.text);
            console.log(status);
            client.user.setStatus('online');
            client.user.setActivity(status, { type: 'PLAYING' });
        }
    }).catch(err => {

    })
};

// Script start output
client.on('ready', () => {
    console.log('Bot is now online!');
    client.setInterval(update,5000);
});

// Bot token
client.login(token);

