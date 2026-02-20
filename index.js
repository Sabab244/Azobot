// Updated index.js for proper login handling with delays and command execution

const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

const DELAY_MS = 2000; // 2 seconds delay

client.once('ready', async () => {
    console.log(`Logged in as ${client.user.tag}`);
    // Adding a delay before executing commands
    await new Promise(resolve => setTimeout(resolve, DELAY_MS));
    // Execute any subsequent command here
    // Example: await executeCommands();
});

client.login('YOUR_BOT_TOKEN'); // Ensure to set your bot token here