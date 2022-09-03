const path = require('path')
const fs = require('fs')
const commandsPath = path.join(__dirname, '../commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord.js');
const rest = new REST({ version: '10' }).setToken(process.env["TOKEN"]);

function commands(client) {
	for (const file of commandFiles) {
		const filePath = path.join(commandsPath, file);
		const command = require(filePath);
		client.commands.set(command.data.name, command);
	}
	const commands = [];

	for (const file of commandFiles) {
		const filePath = path.join(commandsPath, file);
		const command = require(filePath);
		commands.push(command.data.toJSON());
	}
    rest.put(Routes.applicationGuildCommands('943819475713675274', '924428872446009434'), { body: commands })
	    .then(() => console.log('Commands Registed:\n' + commands))
	    .catch(err) {console.log('Commands failed to register' + err)};
}

module.exports = {
	commands: commands,
}