require("dotenv").config();
/** 
 *FILL IN ALL THE REQUIRED INFO
 */
module.exports = {
    client_token: process.env.CLIENT_TOKEN || "", // REQUIRED The bot's Token
    client_id: process.env.CLIENT_ID || "", // REQUIRED The Bot's Id
    default_color: process.env.DEFAULT_COLOR || "", // REQUIRED The bot's default embed color code ( hex color code )
    mongodb_url: process.env.MONGO_URI || "", // REQUIRED Mongodb Url
    developers: process.env.DEV_ID || "", // REQUIRED Developer Id ( can be an array )
    support_server:  process.env.SUPPORT_SERVER || "", // REQUIRED Support Server Id
    defaultSearchPlatform: process.env.DEFAULT_SEARCH_PLATFORM || "spsearch", // REQUIRED ( this Can Be spsearch, ytsearch, ytmsearc, scsearch )
    nodes: [
        {
        name: "Lavalink v4",
        host: "node-us.beban.tech",
        port: 80,
        password: "dsc.gg/bebancommunity",
        secure: false,
        reconnectTimeout: 5000,
        reconnectTries: 15
    },
    {
        name: "lavalink.jirayu.net 1",
        host: "lavalink.jirayu.net",
        password: "youshallnotpass",
        port: 13592,
        reconnectTimeout: 5000,
        reconnectTries: 15,
        secure: false
    },
    {
        name: "Catfein",
        host: "lava.catfein.com",
        password: "catfein",
        port: 4000,
        reconnectTimeout: 5000,
        reconnectTries: 15,
        secure: false
    },
    {
        name: "Catfein DE",
        host: "lavalink.alfari.id",
        password: "catfein",
        port: 443,
        reconnectTimeout: 5000,
        reconnectTries: 15,
        secure: true
    },
    {
        name: "LewdHuTao - Lavalink",
        host: "node.lewdhutao.my.eu.org",
        password: "youshallnotpass",
        port: 80,
        reconnectTimeout: 5000,
        reconnectTries: 15,
        secure: false
    }
        /** 
         *  CHECK OUT THE AVAILABLE LAVALINK SERVER ON https://uptime.beban.tech/status/servers
         */
    ],
    spotify: {
        clientId: "e3aa39043d3e412d98f08e0a57de637f", // https://developer.spotify.com/
        ClientSecret: "a7ff8e0aadf3449594a90618a8266754" // https://developer.spotify.com/
    },
	presence: {
		/**
		 * online, idle, dnd, invisible, ...
		 */
		status: "dnd",
		activities: [
			{
				name: "{Guilds} Servers",
				type: "WATCHING",
				data: (client) => {
					return {
						Guilds: client.guilds.cache.size,
					};
				},
			},
			{
				name: "Made By Gunman",
				type: "PLAYING",
			},
		],
	},
}
