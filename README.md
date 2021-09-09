## Table of Contents
* [Dependencies](#dependencies)
* [Installation and Set-up](#installation-and-set-up)
* [FAQ](#faq)

## Dependencies
Discord.js v12 or later
Nodejs latest stable build

## Installation and Set-up
Download the master and extract the contents into a folder on the computer/server you intend on using to host your bot.
Fill the following lines from the `config.json` file:
```
{
    "token":"YOUR DISCORD BOT TOKEN",
    "ip":"YOUR MINECRAFT SERVER IP"
}
```
Once you've changed the `token` and `ip` variables, you can now start your bot.

## FAQ
### Which library does this bot use?
The bot was developed using [discord.js](https://discord.js) v12 and has been tested on v13. We haven't tested this on any other version, so we cannot guarentee that the bot will function as intended on older versions of discord.js, however we do plan to test on newer versions of discord.js as they become available.

### Where do I find my Discord bot token?
Head over to [this blog post](https://www.sheldonjsmith.com/2021/07/20/creating-discord-bot.html) to learn how to set-up a Discord application with a bot, and locating your Discord bot token.

### How often will this bot be updated?
Ideally, only when aspects of this bot become deprecated in newer versions of discord.js however if you are experiencing difficulties that you believe to be caused by the bot's code, please open an issue or email [support@minestatus.xyz](mailto:support@minestatus.xyz).
