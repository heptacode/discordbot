import { Guild } from "discord.js";
import { createError } from "../modules/createError";
import { firestore } from "../modules/firebase";
import { checkPermission } from "../modules/permissionChecker";
import { client } from "../app";
import props from "../props";
import { Interaction, Locale, State } from "../";

export default {
  name: "privateroom",
  version: 2,
  options(locale: Locale) {
    return [
      {
        type: 7,
        name: "fallback_voice_channel",
        description: locale.voiceChannel,
        required: false,
      },
    ];
  },
  async execute(state: State, interaction: Interaction) {
    try {
      if (await checkPermission(state.locale, { interaction: interaction }, "MANAGE_CHANNELS")) throw new Error("Missing Permissions");

      if (interaction.data.options && client.channels.resolve(interaction.data.options[0].value).type !== "voice")
        return [
          {
            color: props.color.red,
            title: `**⚙️ ${state.locale.privateRoom.privateRoom}**`,
            description: `❌ **${state.locale.notVoiceChannel}**`,
          },
        ];

      const guild: Guild = client.guilds.resolve(interaction.guild_id);

      const privateRoomID = (
        await guild.channels.create(state.locale.privateRoom.create, {
          type: "voice",
          userLimit: 1,
          permissionOverwrites: [
            {
              type: "member",
              id: client.user.id,
              allow: ["VIEW_CHANNEL", "MANAGE_CHANNELS", "CONNECT", "MOVE_MEMBERS"],
            },
            {
              type: "role",
              id: guild.roles.everyone.id,
              deny: ["CREATE_INSTANT_INVITE", "SPEAK"],
            },
          ],
        })
      ).id;

      await firestore
        .collection(guild.id)
        .doc("config")
        .update({ privateRoom: { generator: privateRoomID, fallback: interaction.data.options ? interaction.data.options[0].value : null } });

      return [
        {
          color: props.color.green,
          title: `**${state.locale.privateRoom.privateRoom}**`,
          description: `✅ **${state.locale.privateRoom.set}**`,
        },
      ];
    } catch (err) {
      createError("PrivateRoom", err, { interaction: interaction });
    }
  },
};
