---
title: Home
layout: default
---

# Introduction
This bot is barebones and doesn't contain any additional features. We intend on releasing an advanced version of this bot with more features and slightly different functionality.

# Table of Contents
* [Dependencies](#dependencies)
* [Installation and Set-up](#installation-and-set-up)
* [FAQ](#faq)

# Dependencies
* [Nodejs](https://nodejs.org/) (latest stable build)
* [Node Package Manager (npm)](https://www.npmjs.com/) (latest stable build)
* [Discord.js](https://discord.js.org) v12 (or later)
* [Fetch](https://www.npmjs.com/package/node-fetch) (latest stable build)

# Installation and Set-up
Please install the below in order otherwise you will experience errors when trying to complete all installations.

## Nodejs & npm Installation

### Linux
[Linuxize Guide](https://linuxize.com/post/how-to-install-node-js-on-ubuntu-18.04/)

### Windows
[Guru99 Guide](https://www.guru99.com/download-install-node-js.html)

## Discord.js Installation
Now that you have nodejs and npm installed, open up a command prompt (Windows) or terminal (macOS or Linux) window and navigate to the directory you'd like to use as the directory all of the bot's files will be stored in.

Run the following commands:

`npm init`

`npm install discord.js`

## Fetch Installation
Run the below command:

`npm install fetch`

# Bot Set-up
Download the master and extract the contents into a folder on the computer/server you intend on using to host your bot.
Fill the following lines from the `config.json` file:
```
{
    "token":"YOUR DISCORD BOT TOKEN",
    "ip":"YOUR MINECRAFT SERVER IP"
}
```
Once you've changed the `token` and `ip` variables, you can now start your bot.

# FAQ
## Which library does this bot use?
The bot was developed using [Discord.js](https://discord.js.org) v12 and has been tested on v13. We haven't tested this on any other version, so we cannot guarentee that the bot will function as intended on older versions of Discord.js, however we do plan to test on newer versions of Discord.js as they become available.

## Where do I find my Discord bot token?
Head over to [this blog post](https://www.sheldonjsmith.com/2021/07/20/creating-discord-bot.html) to learn how to set-up a Discord application with a bot, and locating your Discord bot token.

## How often will this bot be updated?
Ideally, only when aspects of this bot become deprecated in newer versions of discord.js however if you are experiencing difficulties that you believe to be caused by the bot's code, please open an issue or email [support@minestatus.xyz](mailto:support@minestatus.xyz).
