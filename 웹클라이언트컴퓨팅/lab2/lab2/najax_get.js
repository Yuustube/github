// npm install najax


let najax = $ = require('najax');
let fs=require('fs');


let getData = (callback) => {
	let tableData;
	$.get('https://www.google.com', callback);
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
                   fs.writeFile(__dirname+"/temp/google_page.html", tableData, function(err) {
                       if(err) {
                           return console.log(err);
                       }
                       console.log("The file(google_page.html) was saved!");
         });
});
