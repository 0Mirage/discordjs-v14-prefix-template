module.exports = class Command {
    constructor(name, description, usage, category, options) {
        this.name = name;
        this.description = description;
        this.usage = usage;
        this.category = category;
        this.runCommand = options.runCommand
    }
}