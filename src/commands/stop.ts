import { Message } from "discord.js";
import { Args, Locale, State } from "../";
import { stop } from "../modules/musicManager";

module.exports = {
  name: "stop",
  aliases: [],
  description: "Stop the music",
  execute(locale: Locale, state: State, message: Message, args: Args) {
    stop(locale, state, message);
  },
};
