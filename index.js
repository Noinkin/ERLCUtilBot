/*const { Client, GatewayIntentBits, Collection } = require('discord.js');
const { handle } = require('./handler.js')
const keepAlive = require('./server.js')

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.commands = new Collection()
client.buttons = new Collection()

handle(client)

module.exports = client

keepAlive()

client.login(process.env["TOKEN"]);*/
const { QuickDB } = require('quick.db');
const db = new QuickDB({ filePath: './db/errors.sqlite' });
function makeId(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}

(async () => {
	try{
		await db.set('thing', console.log())
	} catch(err) {
		const errId = makeId(6)
		await db.set(errId, `${err}`)
		console.log('An unexpected error has occured, your error id is ' + errId)

		const newErr = await db.get(errId)
		console.log(newErr)
	}
})();