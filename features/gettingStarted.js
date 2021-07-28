const { BotkitConversation } = require('botkit');
const data = require('./data/gettingStarted');

const quick_replies = data.map(item => ({title: item.question, payload: item.question}));
module.exports =async function(controller) { 
    const gettingStarted = new BotkitConversation('gettingStarted', controller);
    var reply = {
        text: 'common FAQs',
        quick_replies
      }
    gettingStarted.say(reply);
    controller.addDialog(gettingStarted);
    controller.hears(['Getting started'], 'message', async(bot, message) => {
        await bot.beginDialog('gettingStarted');
    });
}