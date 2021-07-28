const { BotkitConversation } = require('botkit');

module.exports =async function(controller) { 
    const faq = new BotkitConversation('faq', controller);
    await faq.say('Welcome to Google cloud support system');
    var reply = {
        text: 'Here are the categories:',
        quick_replies: [
            {
                title: 'Pricing and support',
                payload: 'Pricing and support'
            },
            {
                title: 'Getting started',
                payload: 'Getting started'
            }
        ]
      }
    await faq.say(reply) 

    controller.addDialog(faq);
    controller.hears(['hello'], 'message', async(bot, message) => {
        await bot.beginDialog('faq');
    });
}