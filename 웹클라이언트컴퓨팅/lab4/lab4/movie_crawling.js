 
const cheerio = require('cheerio');
const request = require('request');
const Iconv = require('iconv').Iconv;
const iconv = new Iconv('CP949', 'utf-8//translit//ignore');
 
 
let url = "http://movie.naver.com/movie/sdb/rank/rmovie.nhn";
 
request({url, encoding: null}, function(error, response, body){
    let htmlDoc = iconv.convert(body).toString();
    let resultArr = [];
 
    const $ = cheerio.load(htmlDoc);
    let colArr = $(".tit3 a")
    for(let i = 0; i < colArr.length; i++)
        resultArr.push(colArr[i].attribs.title)
 
    console.log(resultArr)
});
