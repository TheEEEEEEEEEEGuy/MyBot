
                (async()=>{
                    const Discord = require("discord.js");
                    const Database = require("easy-json-database");
                    const moment = require('moment');
                    const { DB } = require("quickmongo");
                    const { MessageEmbed, MessageButton, MessageActionRow, Intents, Permissions, MessageSelectMenu } = require('discord.js')
                    const devMode = typeof __E_IS_DEV !== "undefined" && __E_IS_DEV;
                    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
                    const s4d = {
                        Discord,
                        database: new Database(`${devMode ? S4D_NATIVE_GET_PATH : "."}/db.json`),
                        joiningMember:null,
                        reply:null,
                        tokenInvalid:false,
                        tokenError: null,
                        player:null,
                        checkMessageExists() {
                            if (!s4d.client) throw new Error('You cannot perform message operations without a Discord.js client')
                            if (!s4d.client.readyTimestamp) throw new Error('You cannot perform message operations while the bot is not connected to the Discord API')
                        }
                    };
                    s4d.client = new s4d.Discord.Client({
                        intents: [Object.values(s4d.Discord.Intents.FLAGS).reduce((acc, p) => acc | p, 0)],
                        partials: ["REACTION"]
                    });
                    const { Player,QueueRepeatMode } = require("discord-player")
                    s4d.player = new Player(s4d.client)
                    var TAcc, TMessage;


await s4d.client.login('OTIyODQzOTczODg4OTMzOTA4.YcHXbA.tR5uNh_WPQJ09AP8XSUWKrNIBK8').catch((e) => { s4d.tokenInvalid = true; s4d.tokenError = e; });

s4d.client.on('messageCreate', async (s4dmessage) => {
  if ((s4dmessage.content) == '>add ticket') {
    s4dmessage.channel.send({content:String('Please type here your problem.  If you want to cancel it, type ">cancel".')});
    TAcc = true;
  }
  if ((s4dmessage.content) != '>cancel' && TAcc == true) {
    TMessage = (s4dmessage.content);
    s4dmessage.delete();
    s4dmessage.channel.send({content:String('Your message was sent to the moderators.')});
    s4d.client.channels.cache.find((channel) => channel.name === 'ticket').send({ content: String((['A ticket created by ',s4dmessage.member,TMessage].join('')))});
  }

});

                    return s4d;
                    })();
            