const { BotkitConversation } = require('botkit');
const data = require('./data/pricingAndSupport');

const quick_replies = data.map(item => ({title: item.question, payload: item.question}));
module.exports =async function(controller) { 
    const pricingAndSupport = new BotkitConversation('pricingAndSupport', controller);
    var reply = {
        text: 'common FAQs',
        quick_replies
      }
    pricingAndSupport.say(reply);
    controller.addDialog(pricingAndSupport);
    controller.hears(['Pricing and support'], 'message', async(bot, message) => {
        await bot.beginDialog('pricingAndSupport');
    });
}