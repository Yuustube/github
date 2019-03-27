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
                   //console.log(tableData);
                   fs.writeFile(__dirname+"/temp/weather.html", tableData, function(err) {
                       if(err) {
                           return console.log(err);
                       }
                       console.log("The file(weather.html) was saved!");
         });
});
