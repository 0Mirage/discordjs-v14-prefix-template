const { readdir } = require("fs/promises");

module.exports = async function loadCommands(client) {
    const commandFolder = await readdir(`${process.cwd()}/commands`);

    for (const file of commandFolder) {
        const newCommand = require(`../commands/${file}`);
        const command = newCommand;
        const commandName = file.split(".js")[0];
        client.commands.set(command.name, command);

        console.log(`${commandName} : chargée`);
    }
}