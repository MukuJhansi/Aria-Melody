const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const { logger } = require("../../models/logger");
const config = require("../../config");
const fetch = require("node-fetch");


module.exports = {
	data: new SlashCommandBuilder()
   	.setName("lyrics")
   	.setDescription("Display lyrics for current played song")
    .addStringOption(option =>
        option.setName("song")
        .setDescription("Song name")
    ),

    run: async ({ interaction, client }) => {    
        try {
            await interaction.deferReply();
            const player = client.riffy.players.get(interaction.guildId);
            const value = interaction.options.getString("song");

            if (!player && !value) {
                return interaction.editReply({ content: "\`❌\` | No active player found." });
            }

            let song = value;
            if (!value) song = player.current.info.title.replace(["(Official Video)", "(Official Audio)"], "");

            await fetch(`https://some-random-api.com/others/lyrics?title=${song}`)
                .then((res) => res.json())
                .then((data) => {
                    const lyricSong = data.lyrics;
                    const lyricUrl = data.links?.genius;
                    if (!lyricSong) {
                        return interaction.editReply({ content: "\`❌\` | Lyrics was not found." });
                    }

                    const lyrics = lyricSong.length > 3905 ? lyricSong.substr(0, 3900) + "....." : lyricSong;
                    const titleSong = data.title;
                    const authorSong = data.author;
                    const lyricEmbed = new EmbedBuilder()
                        .setAuthor({
                            name: `${titleSong} by ${authorSong} lyrics`,
                            iconURL: client.user.displayAvatarURL({ dynamic: true }),
                        })
                        .setColor(config.default_color)
                        .setDescription(`${lyrics}\n**[Click Here For More](${lyricUrl})**`);

                    return interaction.editReply({ embeds: [lyricEmbed] });
                });
        } catch (err) {
            logger(err, "error");
            await interaction.editReply({ content: `\`❌\` | An error occurred: ${err.message}`, ephemeral: true });
        }
    }
};
