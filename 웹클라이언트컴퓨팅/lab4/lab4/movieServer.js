
const cheerio = require('cheerio');
const request = require('request');
const iconv = require('iconv-lite');
let titles = new Array();
let images = new Array();
let genres = new Array();
let reserves = new Array();
let directors = new Array();
let actors = new Array();

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
        titles[i] = title;
        let src = $(`div.lst_wrap > ul > li:nth-child(${i+1}) > div > a > img`).attr('src');
        let image = $(`div.lst_wrap > ul > li:nth-child(${i+1}) > div > a`).html();
        images[i] = image;
        let genre = '';
        $(`div.lst_wrap > ul > li:nth-child(${i+1}) > dl > dd:nth-child(3) > dl > dd:nth-child(2) > span.link_txt > a`).each(function(index, obj) {
            genre += $(this).text() +', '; });
        genre = genre.substring(0, genre.length-2);
        genres[i] = genre;
        let reserve = $(`div.lst_wrap > ul > li:nth-child(${i+1}) > dl > dd.star > dl.info_exp > dd > div > span.num`).text();
        reserves[i] = reserve;
        let director = $(`div.lst_wrap > ul > li:nth-child(${i+1}) > dl > dd > dl.info_txt1 > dd:nth-child(4) > span.link_txt > a`).text();
        directors[i] = director;
        let actor = $(`div.lst_wrap > ul > li:nth-child(${i+1}) > dl > dd > dl.info_txt1 > dd:nth-child(6) > span.link_txt > a:nth-child(1)`).text();
        actors[i] = actor;


      }

      //console.log(reserves)
      //console.log(title)

    //console.log(resultArr)
});


// 모듈을 추출합니다.
const express = require('express');
// 서버를 생성합니다.
const app = express();
// request 이벤트 리스너를 설정합니다.
app.use((request, response) => {
// 데이터소스: https://movie.naver.com/movie/running/current.nhn

    let output = ""

    output += "<style>";
    output += ".row { width: 990px; text-align: left; margin-top: -10px; margin-bottom: -10px; }";
    output += ".block {  width: 330px; vertical-align: middle; display: inline-block; line-height: 7px; }​";
    output += ".block h5 { margin-bottom: 1.71429rem; margin-top: 1.71429rem; }";
    output += "</style>";


    for(let i = 0; i < 50; i++){
      output += "<div class='row'>";
      output += "<div class='block'>";
      output += "<h2>"+ (i+1) +"</h2>";
      output += "</div>";
      output += "<div class='block'>";
      output += images[i];
      output += "</div>";
      output += "<div class='block'>";
      output += "<h5>제목: " + titles[i]  + " </h5>";
      output += "<h5>예매율: " + reserves[i] + "%</h5>";
      output += "<h5>개요: "+ genres[i] +"</h5>";
      output += "<h5>감독: "+ directors[i] +"</h5>";
      output += "<h5>출연: "+ actors[i] +"</h5>";
      output += "</div>";
      output += "</div>";
      output += "<hr/>";
    }

    response.send(output);
});
// 서버를 실행합니다.
app.listen(52273, () => {
    console.log('Server running at http://127.0.0.1:52273');
});
