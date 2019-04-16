
const cheerio = require('cheerio');
const request = require('request');
const iconv = require('iconv-lite');


let url = "https://movie.naver.com/movie/running/current.nhn";

request({url, encoding: null}, function(error, response, body){
    let htmlDoc = iconv.decode(body, 'UTF-8');
//    let htmlDoc = body;
    let resultArr = [];

    const $ = cheerio.load(htmlDoc);
    let colArr = $("dl.lst_dsc")
    var names;
    for(let i = 0; i < colArr.length; i++) {
        let title = $(`div.lst_wrap > ul > li:nth-child(${i+1}) > dl > dt > a`).text();
        let src = $(`div.lst_wrap > ul > li:nth-child(${i+1}) > div > a > img`).attr('src');
        let image = $(`div.lst_wrap > ul > li:nth-child(${i+1}) > div > a`).html();
        let genre = '';
        $(`div.lst_wrap > ul > li:nth-child(${i+1}) > dl > dd:nth-child(3) > dl > dd:nth-child(2) > span.link_txt > a`).each(function(index, obj) {
            genre += $(this).text() +', '; });
        genre = genre.substring(0, genre.length-2);
        resultArr.push({title: title, src: src, image: image, genre: genre})
      }

    console.log(resultArr)
});
