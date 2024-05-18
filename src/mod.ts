import { IPostDBLoadMod } from "@spt-aki/models/external/IPostDBLoadMod";

class ConfigurableFallDamage implements IPostDBLoadMod {
    mod: string

    constructor() {
        this.mod = "ConfigurableFallDamage";
    }
    postDBLoad(container) {
        const config = require("../config/config.json");
        if (config.Enabled) {
            const databaseServer = container.resolve("DatabaseServer");
            const tables = databaseServer.getTables();
            const globals = tables.globals.config;
            globals.Health.Falling.SafeHeight = config.SafeHeight;
            globals.Health.Falling.DamagePerMeter = config.DamagePerMeter;
        }
    }
}

module.exports = { mod: new ConfigurableFallDamage }