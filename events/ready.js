const Event = require("../structures/Event");
const { Events } = require("discord.js");

module.exports = new Event(Events.ClientReady, true, {
    runEvent: async (client) => {
        console.log(`${client.user.username} : connecté`);
    }
})