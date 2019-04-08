
const cheerio = require('cheerio');
const request = require('request');
const iconv = require('iconv-lite');


let url = "https://movie.naver.com/movie/running/current.nhn#";

const url1 = "https://movie.naver.com/movie/running/current.nhn#";

request(url1, (error, response, body) => {
  if (error) throw error;

  console.log(body);
});
request({url, encoding: null}, function(error, response, body){
    let htmlDoc = iconv.decode(body, 'CP949');

//    let htmlDoc = body;
    let resultArr = [];

    const $ = cheerio.load(htmlDoc);
    let colArr = $(".tit3 a")
    console.log($(".tit3 a"))
    for(let i = 0; i < colArr.length; i++)
        resultArr.push(colArr[i].attribs.title)

    console.log(resultArr)
});

for(let i = 0; i < 50; i++){


}
