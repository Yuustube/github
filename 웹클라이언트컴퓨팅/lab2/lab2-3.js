// npm install request


let request=require('request');
let fs=require('fs');

console.log(__dirname);

let time = function(){
    var timeout=5000;
    homepage.pipe(fs.createWriteStream(__dirname+"/temp/naver_page_pipe_delay5000.html"));
    console.log('The file(naver_page_pipe_delay5000.html) was saved after '+timeout+'msec');
    };

let errors = function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file(naver_page.html) was saved!");
}

let main = function(err, res, body){
    fs.writeFile(__dirname+"/temp/naver_page.html", body, err = errors(err));
}


let homepage=request('http://www.naver.com', function(err, res, body){
    fs.writeFile(__dirname+"/temp/naver_page.html", body, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file(naver_page.html) was saved!");
    });
});

homepage.pipe(fs.createWriteStream(__dirname+"/temp/naver_page_pipe.html"));

setTimeout(function(){
    var timeout=5000;
    homepage.pipe(fs.createWriteStream(__dirname+"/temp/naver_page_pipe_delay5000.html"));
    console.log('The file(naver_page_pipe_delay5000.html) was saved after '+timeout+'msec');
    }, 5000);

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
