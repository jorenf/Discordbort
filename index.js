const discord = require("discord.js");
const botConfig = require("./config.json");

const client = new discord.Client();
client.login(botConfig.token);

client.on("ready", async () =>{

console.log('De bot is actief');

})