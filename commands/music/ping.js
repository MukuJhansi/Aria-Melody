const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
          .setName('ping')
          .setDescription('Check the latency of the bot.'),

  run: ({ interaction, client }) => {
  interaction.reply(`Pong! ${client.ws.ping}ms`);
  }
}