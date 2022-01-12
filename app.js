const { Telegraf } = require('telegraf')
//IDF_edu_bot
const bot = new Telegraf('5075287414:AAHLG1aQ7sDY8ndbnnh0wrbewZFewHK2dQQ');

bot.command('start', ctx => {
    console.log(ctx.from)
    bot.telegram.sendMessage(ctx.chat.id, `שלום המפקד/ת אני Edi מש״ק החינוך של Lotem
    איך אפשר לעזור ?
    הקש את הספרה הרצויה:
    1- טיול 🥾
    2- סיור עירוני/ביקור במוזיאונים ואתרים 🌆
    3- התנדבות בקהילה 🤝
    4- שיח מפקד 🗣
    5- פעילות חינוך ביחידה 🏢💙`
    , {})
})
bot.hears('1', (ctx) => {
    console.log(ctx.from);
    ctx.reply(`תודה רבה 😊 באיזה תאריך ושעה תרצה/י לקיים את הפעילות ? `);
});

bot.hears('2', (ctx) => {
    console.log(ctx.from);
    ctx.reply(`תודה רבה 😊 באיזה תאריך ושעה תרצה/י לקיים את הפעילות ? `);
});

bot.hears('3', (ctx) => {
    console.log(ctx.from);
    ctx.reply(`תודה רבה 😊 באיזה תאריך ושעה תרצה/י לקיים את הפעילות ? `);
});

bot.hears('4', (ctx) => {
    console.log(ctx.from);
    ctx.reply(`תודה רבה 😊 באיזה תאריך ושעה תרצה/י לקיים את הפעילות ? `);
});

bot.hears('5', (ctx) => {
    console.log(ctx.from);
    ctx.reply(`תודה רבה 😊 באיזה תאריך ושעה תרצה/י לקיים את הפעילות ? `);
});

bot.hears(`מחר בשעה 16:00`, (ctx) => {
    console.log(ctx.from);
    ctx.reply(`מעולה! מחר בשעה 16:00 נקבעה לך שיחה עם מש״קית החינוך ביחידה (אל תדאג היא כבר תבוא עם הצעות רלוונטיות)

    הערות נוספות?`);
});

bot.launch();


 `מעולה! מחר בשעה 16:00 נקבעה לך שיחה עם מש״קית החינוך ביחידה (אל תדאג היא כבר תבוא עם הצעות רלוונטיות)

הערות נוספות?`