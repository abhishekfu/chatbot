/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
const axios = require('axios');
module.exports = function(controller) {

    // use a function to match a condition in the message
    controller.hears(async (message) => message.text && message.text.toLowerCase() === 'foo', ['message'], async (bot, message) => {
        await bot.reply(message, 'I heard "foo" via a function test');
    });

    // use a regular expression to match the text of the message
    controller.hears(new RegExp(/^\d+$/), ['message','direct_message'], async function(bot, message) {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${message.text}`);
        await bot.reply(message, `userid is ${JSON.stringify(response.data.userId)} and title is ${JSON.stringify(response.data.title)}`)
    });

    // match any one of set of mixed patterns like a string, a regular expression
    controller.hears(['allcaps', new RegExp(/^[A-Z\s]+$/)], ['message','direct_message'], async function(bot, message) {
        await bot.reply(message,{ text: 'I HEARD ALL CAPS!' });
    });

    controller.hears('todos', 'message', async (bot, message)  => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        const quick_replies = response.data.map(item => { 
           return { title: item.title,payload: item.id.toString()}
        });
        await bot.reply(message,{
            text: 'Here are some quick replies',
            quick_replies
        });
        //bot.reply(message, `${JSON.stringify(response.data)}`)
      })

    //   controller.hears('websockets', 'message', async (bot, message)  => {
    //     const response = await axios.get('http://103.110.252.23:5005');
    //     const quick_replies = response.data.map(item => { 
    //        return { title: item.title,payload: item.id.toString()}
    //     });
    //     await bot.reply(message,{
    //         text: 'Here are some quick replies',
    //         quick_replies
    //     });
    //     //bot.reply(message, `${JSON.stringify(response.data)}`)
    //   })
}