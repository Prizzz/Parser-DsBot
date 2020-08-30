const rp = require('request-promise');
const $ = require('cheerio');
const url = 'https://dednet.ru/car-list';

rp(url)
  .then(function(html){
    //success!
    console.log ($ ('.card', html) .text ());

  })

  .catch(function(err){
    //handle error
  });

