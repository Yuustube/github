// npm install najax


let najax = $ = require('najax');
let fs=require('fs');


let getData = (callback) => {
	let tableData;
	$.get('http://api.openweathermap.org/data/2.5/weather?q=Seoul&units=metric&lang=kr&appid=12b1a10d2f79b0171cc04d5cc83408df', callback);

	return tableData;
}

let error = (err) => {
		if(err) {
				return console.log(err);
		}
		console.log("The file(google_page.html) was saved!");
}

getData(function (response) {
		   tableData = response;
			 console.log(typeof(tableData));
			 console.log(tableData);
			 const outputC = JSON.parse(tableData)
			 console.log("---------------------------");
			 console.log(typeof(outputC));
			 console.log(outputC);
			 console.log(" ");
			 console.log("도시이름 = " + outputC.name);
			 console.log("국가 = " + outputC.sys.country);
			 console.log("날씨 = " + outputC.weather[0].description);
			 console.log("평균 온도 = " + outputC.main.temp + "˚");
			 console.log("최대온도 = " + outputC.main.temp_max + "˚");
			 console.log("최저온도 = " + outputC.main.temp_min + "˚");
			 console.log("풍속 = " + outputC.wind.speed + "m/s");
			 console.log("습도 = " + outputC.main.humidity + "%");



                   fs.writeFile(__dirname+"/temp/weather.html", tableData, function(err) {
                       if(err) {
                           return console.log(err);
                       }
                       //console.log("The file(weather.html) was saved!");
         });
});
