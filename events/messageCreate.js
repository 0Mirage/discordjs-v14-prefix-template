const Event = require("../structures/Event");
const { Events, ChannelType, EmbedBuilder} = require("discord.js");

module.exports = new Event(Events.MessageCreate, false, {
    runEvent: async (client, message) => {
        if (message.author.bot || message.channel.type === ChannelType.DM) return;

        const prefix = client.config.BOT.PREFIX;

        if (message.mentions.users.has(client.user.id)) {
            const mentionBot = new EmbedBuilder()
                .setColor("#2f3136")
                .setDescription(`My prefix is ${prefix}`)

            message.channel.send({ embeds: [mentionBot] });
        }

        if (!message.content.startsWith(prefix)) return;

        const args = message.content.slice(prefix.length).trim().split(/ +/);
        const commandName = args.shift().toLowerCase();
        const command = client.commands.get(commandName);
        console.log(command);

        try {
            command.runCommand(client, message, args);
        } catch (err) {
            return console.error(`${err}`);
        }
    }
})