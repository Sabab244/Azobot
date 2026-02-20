const express = require('express');
const mineflayer = require('mineflayer');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello from the Azobot server!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

const bot = mineflayer.createBot({
    host: 'your_server_ip', // Replace with your server IP
    port: 25565, // Port default for Minecraft
    username: 'your_bot_username', // Replace with your bot username
    password: 'your_bot_password' // Replace with your bot password
});

bot.on('spawn', () => {
    console.log('Bot has spawned!');

    // Delay before sending login command
    setTimeout(() => {
        bot.chat('/login your_password'); // Replace 'your_password' with actual password
    }, 5000); // 5 seconds delay

    // Delay before sending register command
    setTimeout(() => {
        bot.chat('/register your_password your_email'); // Replace with actual details
    }, 10000); // 10 seconds delay
});

bot.on('error', (err) => {
    console.error('Error:', err);
});
