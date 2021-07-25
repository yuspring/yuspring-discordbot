const { Client, Collection } = require('discord.js');

module.exports = class extends Client {
    constructor(config) {
        super({
            disableEveryone: true,
        });

        this.queue = new Map();
        this.config = config;
    }
};