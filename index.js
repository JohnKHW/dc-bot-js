require('dotenv').config();
var moment = require('moment');
const { TOKEN } = process.env;

const { Client, Intents } = require('discord.js-selfbot');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', (msg) => {
    const channelId = msg.guild.id
    const ID = 515845669764988958
    //let users = client.users;
    //console.log('msg', user)
    const author = msg.author;
    const name = author.username;
    const sentTimestamp = msg.createdTimestamp;
    const sentTime = moment(sentTimestamp).format('YYYY-MM-DD HH:mm:ss')
    const content = msg.content;
    
    const formatedMsg = `[${name}(${sentTime})]: ${content}`
    //msg.channel.send(formatedMsg);
    console.log(formatedMsg);
    
    if(channelId == 760363245336264724){
    }
})

client.login(TOKEN);