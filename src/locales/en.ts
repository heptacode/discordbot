import { Locale } from "../";

export default {
  on: "ON",
  off: "OFF",
  manager: "[Manager]",
  scope: "Scope",
  role: "Role",
  textChannel: "TextChannel",
  voiceChannel: "VoiceChannel",
  notTextChannel: "Not a text channel.",
  notVoiceChannel: "Not a voice channel.",
  messageID: "MessageID",
  embed: "Embed",
  emoji: "Emoji",
  minute: "m",

  locale: {
    locale: "Locale",
    code: "en",
    name: "English",
    noChange: "No changes have been made.",
    pending: "Currently updating locale configuration. Please wait.",
    changed: "Locale updated.",
  },
  usage: {
    help: "[manager]",
    play: "[query|URL]",
    volume: "<1~10>",
    //
    alarm: "<subscribe|unsubscribe|test>",
    autorole: "<view|add|purge> [user|bot] [role]",
    delete: "<amount>",
    disconnect: "<voiceChannel>",
    edit: "<textChannel> <messageID> <messageEmbed>",
    embed: "<textChannel> <messageEmbed>",
    locale: "<code>",
    log: "<textChannel>",
    move: "<fromVoiceChannel> <targetVoiceChannel>",
    privateroom: "[fallbackVoiceChannel]",
    reactionrole: "<view|add|remove|purge> <textChannel> <messageID> [emoji] [role]",
    setafktimeout: "<minute(s)>",
    userrole: "<view|add|remove|purge> [role]",
    voicerole: "<view|add|remove|purge> <voiceChannel> <role> [textChannel]",
  },
  help: {
    help: "Help",
    description: "List of commands and descriptions you can use.\n(For manager commands, add [manager] for an argument)\n<Required> [Optional]",
    description_manager: "List of commands and descriptions which managers can use.\n<Required> [Optional]",
    join: "Join a voice channel you are in",
    leave: "Disconnect from a voice channel you are in",
    loop: "Toggle loop for the queue",
    pause: "Pause the song",
    play: "Play/enqueue a music",
    queue: "Show queue",
    repeat: "Toggle repeat",
    skip: "Skip current music",
    stop: "Stop the music",
    volume: "Change the volume",
    //
    alarm: "Send hourly alarms to a voice channel",
    autorole: "Give roles when a member/bot joins the server",
    delete: "Bulk delete messages",
    disconnect: "Disconnect all users from a voice channel",
    edit: "Edit a previous embed that I sent",
    embed: "Create an embed",
    locale: "Change the default locale for the server",
    log: "Set a text channel for logging",
    move: "Move all users to another voice channel",
    privateroom: "Initalize a private room generator channel",
    reactionrole: "Add/remove a reaction role",
    setafktimeout: "Set minutes to kick AFK users",
    userrole: "Set user assignable roles in dashboard",
    voicerole: "Give a role when someone joins a voice channel",
  },
  insufficientPerms: {
    manage_guild: "You don't have permission to manage the guild.",
    manage_channels: "You don't have permission to manage channels.",
    manage_roles: "You don't have permission to manage roles.",
    manage_messages: "You don't have permission to manage messages.",
    move_members: "You don't have permission to move members.",
    connect: "I don't have permissions to Connect and Speak.",
  },

  afkTimeout: {
    afkTimeout: "AFK Timeout",
    set: "AFK Timeout has been updated: {min} minutes",
    disconnected: " was disconnected due to inactivity.",
    disconnected_dm: "You've been disconnected due to inactivity.",
    countdownStarted: "AFK Timeout Countdown Started({min} minutes)",
    options: {
      minutesToDisconnect: "Minutes to Timeout",
    },
  },
  alarm: {
    options: {
      subscribe: "Subscribe to hourly alarm",
      unsubscribe: "Unsubscribe to hourly alarm",
      test: "Test hourly alarm",
    },
  },
  autoRole: {
    autoRole: "Auto Roles",
    empty: "No roles have been set.",
    roleAppended: "Role Append [AutoRole]",
    options: { view: "View AutoRole Config", add: "Add AutoRole Config", purge: "Purge AutoRole Config" },
  },
  delete: {
    deleted: " Messages have been deleted.",
  },
  disconnect: {
    disconnect: "Disconnect",
    disconnected: "Disconnected {cnt}user(s) from {voiceChannel}",
  },
  voiceDisconnect: {
    notInVoiceChannel: "I'm currently not in a voice channel!",
  },
  music: {
    joinVoiceChannel: "To use this command, join a voice channel.",
    currentlyPlaying: "Currently playing a song.",
    noResult: "No results were found!",
    enqueued: "Enqueued",
    nowPlaying: "Now Playing",
    length: "Length",
    remaining: "Songs Remaning",
    position: "Position in Queue",
    queue: "Queue",
    queueEmpty: "Queue is empty.",
    loopToggled: "Loop Toggled ",
    repeatToggled: "Repeat Toggled ",
    noSongToSkip: "There is no song that I could skip!",
    skipped: "Skipped",
    volumeChanged: "Volume changed to ",
    options: { query: "Query/URL" },
  },
  log: {
    log: "Logging",
    set: "Log channel set to: ",
    guildMemberAdd: "User Join",
    guildMemberAdded: " joined the server.",
    guildMemberRemove: "User Leave",
    guildMemberRemoved: " left the server.",
    messageEdit: "Message Edited",
    messageDelete: "Message Deleted",
  },
  move: {
    move: "Move",
    moved: " user(s) moved: ",
  },
  privateRoom: {
    privateRoom: "Private Room",
    create: "Create Private Room",
    set: "Private Room has been set.",
    waitingRoom: "Waiting Room",
    waitingForMove: " is Waiting for Move",
    privateTextCreated:
      "Private Text Channel has been created.\nThis channel is only visible to members in your PrivateRoom and server moderators.\nPlease note that new members don't have permission to read message history.",
  },
  reactionRole: {
    roleAppended: "Role Append [ReactionRole]",
    roleRemoved: "Role Removed [ReactionRole]",
    options: {
      view: "View ReactionRole Config",
      add: "Add ReactionRole Config",
      remove: "Remove ReactionRole Config",
      purge: "Purge ReactionRole Config",
    },
  },
  userRole: {
    userRole: "User Assignable(Dashboard) Roles",
    empty: "설정된 역할이 없어요.",
    options: {
      view: "View UserRole Config",
      add: "Add UserRole Config",
      remove: "Remove UserRole Config",
      purge: "Purge UserRole Config",
    },
  },
  voiceRole: {
    voiceRole: "Voice Channel Roles",
    updated: "Updated {cnt} voice role(s).",
    noChanges: "No moderation have been made.",
    empty: "No roles have been set.",
    roleAppended: "Role Appended [Voice]",
    roleRemoved: "Role Removed [Voice]",
    options: {
      view: "View VoiceRole Config",
      add: "Add VoiceRole Config",
      remove: "Remove VoiceRole Config",
      purge: "Purge VoiceRole Config",
      update: "Update VoiceRoles",
      channelToSendLogs: "TextChannel to send Enter/Leave Information",
    },
  },
} as Locale;
