const { InteractionType } = require('discord.js')

function interaction(interaction) {
	const client = interaction.client
	if (interaction.type === InteractionType.ApplicationCommand) {
		
		const command = client.commands.get(interaction.commandName);

		if(!command) return await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });

		if(command.ephemeral === true) {
			await interaction.reply({content: '<:OceanicIndustriesLogo:1011598355408900126> is thinking...', ephemeral: true })
		} else {
			await interaction.reply({content: '<:OceanicIndustriesLogo:1011598355408900126> is thinking...', ephemeral: false })
		}
		try {
			await command.execute(client, interaction);
		} catch (error) {
			console.log(error);
			await interaction.editReply({ content: 'There was an error while executing this command!', ephemeral: true });
		}
	}
}

module.exports = {
	interaction: interaction,
}