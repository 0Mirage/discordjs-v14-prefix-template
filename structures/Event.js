module.exports = class Event {
    constructor(name, once, options) {
        this.name = name;
        this.once = once;
        this.runEvent = options.runEvent
    }
}