// npm install request


let request=require('request');
let fs=require('fs');

console.log(__dirname);

let homepage=request('http://www.naver.com', function(err, res, body){
    fs.writeFile(__dirname+"/temp/naver_page.html", body, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file(naver_page.html) was saved!");
    });
});

let errors = function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file(naver_page.html) was saved!");
}

homepage.pipe(fs.createWriteStream(__dirname+"/temp/naver_page_pipe.html"));

setTimeout(function(){
    var timeout=5000;
    homepage.pipe(fs.createWriteStream(__dirname+"/temp/naver_page_pipe_delay5000.html"));
    console.log('The file(naver_page_pipe_delay5000.html) was saved after '+timeout+'msec');
    }, 5000);
