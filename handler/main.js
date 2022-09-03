const { commands } = require('./commands')
const { events } = require('./events')

function h(client) {
	commands(client);
	events(client);
}

module.exports = {
	handle: h,
}