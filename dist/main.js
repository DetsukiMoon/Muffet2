const tesInt = [1, 2, 3];
function addInt(int) {
    tesInt.push(int);
}
addInt(25);
console.log(tesInt);
import MuffetClient from "./muffetClient/muffetClient.js";
import MuffetAPI from "./muffetAPI/muffetAPI.js";
import { IntentsBitField } from "discord.js";
const muffetClient = new MuffetClient({
    token: process.env['muffetTOKEN'],
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
        IntentsBitField.Flags.GuildMembers
    ]
});
const muffetAPI = new MuffetAPI({ port: 8080, muffetClient: muffetClient });
await muffetAPI.init();
await muffetClient.init();
muffetClient.on('ready', () => {
    console.log(muffetClient.isReady());
});
