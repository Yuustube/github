 
const cheerio = require('cheerio');
const request = require('request');
const iconv = require('iconv-lite');
 
 
let url = "http://movie.naver.com/movie/sdb/rank/rmovie.nhn";
 
request({url, encoding: null}, function(error, response, body){
    let htmlDoc = iconv.decode(body, 'CP949');
//    let htmlDoc = body;
    let resultArr = [];
 
    const $ = cheerio.load(htmlDoc);
    let colArr = $(".tit3 a")
    for(let i = 0; i < colArr.length; i++)
        resultArr.push(colArr[i].attribs.title)
 
    console.log(resultArr)
});
