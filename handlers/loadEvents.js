const { readdir } = require("fs/promises");

module.exports = async function loadEvents(client) {
    const eventFolder = await readdir(`${process.cwd()}/events`);

    for (const file of eventFolder) {
        const newEvent = require(`../events/${file}`);
        const event = newEvent;
        const eventName = file.split(".js")[0];

        if (event.once) {
            client.once(event.name, (...args) => event.runEvent(client, ...args));
        } else {
            client.on(event.name, (...args) => event.runEvent(client, ...args));
        }

        console.log(`${eventName} : chargé`);
    }
}