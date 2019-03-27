// npm install request


let request=require('request');
let fs=require('fs');

console.log(__dirname);

let homepage=request('http://api.openweathermap.org/data/2.5/forecast?q=Busan&units=metric&lang=kr&appid=12b1a10d2f79b0171cc04d5cc83408df', function(err, res, body){
    fs.writeFile(__dirname+"/temp/forecast.html", body, function(err) {
        if(err) {
            return console.log(err);
        }
       console.log(typeof(body));
       console.log(body);
       const outputC = JSON.parse(body);
       console.log("---------------------------");
 			 console.log(typeof(outputC));
 			 console.log(outputC);
 			 console.log("도시이름 = " + outputC.city.name);
 			 console.log("국가 = " + outputC.city.country);
       for(var i = 0; i < 37; i++){
 			 console.log("날씨 = " + outputC.list[i].weather[0].description);
 			 console.log("평균 온도 = " + outputC.list[i].main.temp + "˚");
 			 console.log("최대온도 = " + outputC.list[i].main.temp_max + "˚");
 			 console.log("최저온도 = " + outputC.list[i].main.temp_min + "˚");
 			 console.log("풍속 = " + outputC.list[i].wind.speed + "m/s");
 			 console.log("습도 = " + outputC.list[i].main.humidity + "%");
       console.log("시간 = " + outputC.list[i].dt_txt);
       console.log(" ");
     }

        //console.log("The file(forecast_page.html) was saved!");
    });
});

let errors = function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file(naver_page.html) was saved!");
}

homepage.pipe(fs.createWriteStream(__dirname+"/temp/forecast_page_pipe.html"));

/*setTimeout(function(){
    var timeout=5000;
    homepage.pipe(fs.createWriteStream(__dirname+"/temp/forecast_page_pipe_delay5000.html"));
    //console.log('The file(naver_page_pipe_delay5000.html) was saved after '+timeout+'msec');
    }, 5000);
*/
