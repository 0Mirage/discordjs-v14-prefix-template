const Client = require("./structures/Client");
const { GatewayIntentBits } = require("discord.js");
const { config } = require("dotenv");
config();

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
    allowedMentions: {
        repliedUser: false,
        parse: ["roles", "users"]
    }
})

client.start();