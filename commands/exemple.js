const Command = require("../structures/Command");

module.exports = new Command("exemple", "Commande qui sert d'exemple sur comment créer des commandes avec préfix avec cette template", "exemple", "exemple", {
    runCommand: (client, message, args) => {
        message.channel.send("Commande d'exemple");
    }
})