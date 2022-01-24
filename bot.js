require('dotenv').config();
const { Telegraf } = require('telegraf');
const KEY=process.env.API_KEY;
const bot = new Telegraf('KEY');
bot.start((ctx) => {
    console.log(ctx.from);
    ctx.reply("Hello "+ctx.from.first_name);

})
bot.help((ctx)=>{
    ctx.reply("This is the list of command :")
})

bot.hears("cat",(ctx)=>{
    ctx.reply("You said cat!!")
})

// making own command

bot.command("mycommand",(ctx)=>{
    ctx.reply("You used mycommand !!!")
})

bot.launch()