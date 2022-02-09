const { Client, Intents } = require('discord.js')
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] })

client.on ('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
});

client.on ('messageCreate', (message) => {
    if (message.content === '!ping') {
        message.reply('pong!')
    }
})

client.on ('messageCreate', (message) => {
  if (message.content === 'ジョンマイケル') {
    message.channel.send('https://drive.google.com/uc?id=1XVqaJUNojROHlpb7UygqqwvFBSSMxrAH')
  }
})

client.on ('message', message => {
  if(message.content.match('ジョン')){
    message.channel.send('ん?なんか言ったか?')
  }
})

client.on ('message', message => {
  if(message.content.match('マイケル')){
    message.channel.send('ん?なんか言ったか?')
  }
})

client.on ('message', message => {
  if(message.content.match('可愛い')){
    message.channel.send('https://drive.google.com/uc?id=1V3uAGQVaS8RXaS3cL36BPDfMmw-uZ3vG')
  }
})

client.on ('message', message => {
  if(message.content.match('かわいい')){
  message.channel.send('https://drive.google.com/uc?id=1V3uAGQVaS8RXaS3cL36BPDfMmw-uZ3vG')
  }
})

client.on ('message', message => {
  if(message.content.match('kawaii')){
  message.channel.send('https://drive.google.com/uc?id=1V3uAGQVaS8RXaS3cL36BPDfMmw-uZ3vG')
  }
})

client.on ('message', message => {
  if(message.content.match('かっこいい')){
  message.channel.send('https://drive.google.com/uc?id=17pgiq6f2AassBkqT_VO5gVPJoZtFXOqh')
  }
})

client.on('message', message => {
  if (message.author.bot) return;
  if (message.content.includes('あいうえお')) {
  }
})

client.on('message', message => {
  if (message.author.bot) return;
  if (message.content.includes('さしすせそ')) {
      message.channel.send('たちつてと')
  }
});

client.on('message', message => {
  if (message.author.bot) return;
  if (message.content.includes('なにぬねの')) {
      message.channel.send('はひふへほ\nまみむめも\nやゆよ\nらりるれろ\nわをん！\n__**もう終わり！**__\nHow long are you going to do this!?')
  }
});

client.login ("OTQwNTE2MDY5MjM4NTA1NDkz.YgIh2A.OU08EvTBAsZE8pK597WF_ioT1Ho");