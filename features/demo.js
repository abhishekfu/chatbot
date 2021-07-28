const { BotkitConversation } = require('botkit');


module.exports =async function(controller) { 
// define the conversation
const onboarding = new BotkitConversation('onboarding', controller);



onboarding.say('Hello human!');
// collect a value with no conditions
onboarding.ask('What is your name?', async(answer) => { 
    // do nothing.
}, {key: 'name'});

await onboarding.ask('What is your name?', async(response, onboarding, bot, full_message) => {
    await bot.say('Oh your name is ' + response);
   }, {key: 'name'});


// collect a value with conditional actions
await onboarding.ask('Do you like tacos?', [
    {
        pattern: 'yes',
        handler: async function(answer, convo, bot) {
            await convo.gotoThread('likes_tacos');
        }
    },
    {
        pattern: 'no',
        handler: async function(answer, convo, bot) {
            await convo.gotoThread('hates_life');
        }
    }
],{key: 'tacos'});

// define a 'likes_tacos' thread
onboarding.addMessage('HOORAY TACOS', 'likes_tacos');

// define a 'hates_life' thread
onboarding.addMessage('TOO BAD!', 'hates_life');

// handle the end of the conversation
onboarding.after(async(results, bot) => {
    const name = results.name;
});

// add the conversation to the dialogset
controller.addDialog(onboarding);

// launch the dialog in response to a message or event
// controller.hears(['hi'], 'message', async(bot, message) => {
//     bot.beginDialog('onboarding');
// });

controller.hears('url', 'message', async(bot,message) => {
    // var reply = {
    //     text: 'Look, an image!',
    //     files: [
    //         {
    //           url: 'https://unsplash.com/',
    //           image: true
    //         }
    //     ]
    //   }

    var reply = {
        text: '<a href="https://unsplash.com/" target="_blank">url</a>'
    }

    await bot.reply(message,reply);
});

controller.hears('image', 'message', async(bot,message) => {
    var reply = {
        text: 'Look, an image!',
        files: [
            {
              url: 'https://images.unsplash.com/photo-1593642531955-b62e17bdaa9c?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=400',
              image: true
            }
        ]
      }

    await bot.reply(message,reply);
});
}

