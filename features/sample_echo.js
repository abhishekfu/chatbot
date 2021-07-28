/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
const {BotkitConversation} = require('botkit')
const data = require('./data/index');
module.exports = function(controller) {
    let convo = new BotkitConversation('convo',controller);
    convo.addQuestion('Do you want to continue(Yes/No)?', [
        {
            pattern: 'yes',
            handler: async function(response, convo, bot) {
                await bot.beginDialog('faq');
            },
        },
        {
            pattern: 'no',
            handler: async function(response, convo, bot) {
                await bot.say('Quitting!');
                await bot.cancelAllDialogs();
            },
        }
    ]);
    controller.addDialog(convo);

    controller.hears('sample','message,direct_message', async(bot, message) => {
        await bot.reply(message, 'I heard a sample message.');
    });

    controller.on('message,direct_message', async(bot, message) => {
        const response = data.find(item => item.question === message.text);
        await bot.reply(message, response.answer || message.text);
        await bot.beginDialog('convo');
    });

}
