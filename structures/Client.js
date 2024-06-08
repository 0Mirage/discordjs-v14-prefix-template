const loadCommands = require("../handlers/loadCommands");
const loadEvents = require("../handlers/loadEvents");
const Discord = require("discord.js");
const config = require("../config.json");

module.exports = class Client extends Discord.Client {
    constructor(options) {
        super(options);
        this.commands = new Discord.Collection();
        this.config = config;
    }

    async start() {
        try {
            this.login(process.env.TOKEN);
            await loadEvents(this);
            await loadCommands(this);
        } catch (err) {
            return console.error(`${err}`);
        }
    }
}