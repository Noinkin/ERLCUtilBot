const { interaction } = require('../lib/index')

module.exports = {
	name: 'interactionCreate',
	async execute(interaction) {
		interaction(interaction)
	},
};