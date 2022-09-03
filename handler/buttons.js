const path = require('path')
const fs = require('fs')
const buttonsPath = path.join(__dirname, '../buttons');
const buttonFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord.js');
const rest = new REST({ version: '10' }).setToken(process.env["TOKEN"]);

function commands(client) {
	for (const file of commandFiles) {
		const filePath = path.join(commandsPath, file);
		const button = require(filePath);
		client.buttons.set(button.data.customId, button);
	}
}

module.exports = {
	commands: commands,
}