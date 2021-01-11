import { Message, MessageEmbed, PartialMessage, TextChannel } from "discord.js";
import firestore from "../modules/firestore";
import Log from "../modules/logger";
import { client, state } from "../app";
import props from "../props";

export default () => {
  client.on("messageUpdate", async (oldMessage: Message | PartialMessage, newMessage: Message | PartialMessage) => {
    try {
      if (oldMessage.author.bot) return;

      const config = (await firestore.collection(oldMessage.guild.id).doc("config").get()).data();

      const messageEmbed: MessageEmbed = new MessageEmbed()
        .setColor(props.color.yellow)
        .setAuthor(state.get(oldMessage.guild.id).locale.log.messageEdit, props.icon.edit)
        .setThumbnail(oldMessage.attachments.size ? oldMessage.attachments.array()[0].proxyURL : null)
        .setTitle(`**${(oldMessage.channel as TextChannel).name}**`)
        .setDescription(
          oldMessage.content ? `**${oldMessage.content}**\n🔽\n**${newMessage.content}**` : `**${oldMessage.attachments.array()[0].name}**\n🔽\n**${newMessage.attachments.array()[0].name}**`
        )
        .setFooter(oldMessage.author.tag, oldMessage.author.avatarURL())
        .setTimestamp(new Date());

      if (config.logMessageEvents)
        return await (client.channels.cache.get(config.log) as TextChannel).send(
          oldMessage.attachments.size ? messageEmbed.attachFiles(oldMessage.attachments.size ? (oldMessage.attachments.array()[0].width ? null : oldMessage.attachments.array()) : null) : messageEmbed
        );
    } catch (err) {
      Log.e(`MessageUpdate > ${err}`);
    }
  });
};