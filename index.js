const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'sendresume') {
    await interaction.reply({
      content: 'Here is dev rathore\'s resume:',
      files: ['https://dev-rathore.netlify.app/assets/Resume-C0p-qhMy.pdf'],
    });
  }

  if (interaction.commandName === 'inspire') {
    await interaction.reply('You are awesome, Never give up!');
  }
});

client.on('messageCreate', async message => {
  // console.log(message);
  if (message.author.bot || !message.mentions.has(client.user.id)) return;
  if (message.content.startsWith('Hello' || 'Hi' || 'Hey' || 'Yo')) {
    await message.reply({
      content: `Hey ${message.author.username}! How can I help you?`,
    });
  }
});

client.login(process.env.TOKEN);
