const config = require('./config.json'); // Подключаем файл с параметрами и информацией
const Discord = require('discord.js'); // Подключаем библиотеку discord.js
const prefix = config.prefix; // «Вытаскиваем» префикс

// Команды //

    function test(robot, mess , args) {
        mess.channel.send('dolboeb')
    }

    function heads_or_tails(robot, mess , args) {
        mess.channel.send('Монета подбрасывается...')

        var random = Math.floor(Math.random() * 4); // Объявление переменной random - она вычисляет случайное число от 1 до 3

        if (random == 1) { // Если вычислено число 1, то выпадает орёл.
            mess.channel.send(':full_moon: Орёл!')
        } else if (random == 2) { // Если вычислено число 2, то выпадает решка.
            mess.channel.send(':new_moon: Решка!')
        } else if (random == 3) { // Если вычислено число 3, то монета падает         ребром.
            mess.channel.send(':last_quarter_moon: Монета упала ребром!')
        }

    }

    function clear(robot, mess , args) {
        const arggs = mess.content.split(' ').slice(1); // Все аргументы за именем команды с префиксом
        const amount = arggs.join(' '); // Количество сообщений, которые должны быть удалены
        if (!amount) return mess.channel.send('Вы не указали, сколько сообщений нужно удалить!'); // Проверка, задан ли параметр количества
        if (isNaN(amount)) return mess.channel.send('Это не число!'); // Проверка, является ли числом ввод пользователя 
        
        if (amount > 100) return mess.channel.send('Вы не можете удалить 100 сообщений за раз'); // Проверка, является ли ввод пользователя числом больше 100
        if (amount < 1) return mess.channel.send('Вы должны ввести число больше чем 1'); // Проверка, является ли ввод пользователя числом меньше 1
        
        async function delete_messages() { // Объявление асинхронной функции

        await mess.channel.messages.fetch({ limit: amount }).then(messages => {
            mess.channel.bulkDelete(messages)
            mess.channel.send(`Удалено ${amount} сообщений!`)
        })};
        delete_messages(); // Вызов асинхронной функции
    }
    

 // Список комманд //

var comms_list = [
    {name: "maloy", out: test, about: "Тестовая команда"},
    {name: "heads_or_tails", out: heads_or_tails, about: "Орел решка"},
    {name: "clear", out: clear, about: "Очистка сообщений"}
];

// Name - название команды, на которую будет реагировать бот
// Out - название функции с командой
// About - описание команды 



module.exports.comms = comms_list;