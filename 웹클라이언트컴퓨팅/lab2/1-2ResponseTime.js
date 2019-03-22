
function callWebService(callback) {
    let second = 0;

    let id = setInterval(function () {
      second = second + 1;
    console.log(second + "초 경과..");
  }, 1000);

    let stoptime = Math.floor(Math.random() * 6) + 2;

    setTimeout(function () {
        clearInterval(id); callback(stoptime);
    }, stoptime * 1000);

}

let evaluateSpeed = (stoptime) =>  {

  console.log("stoptime : " + stoptime);

  if(stoptime <= 3) {
      console.log("빠르네!!");
  }
  else if(stoptime <= 6) {
      console.log("수고했어!");
  }
  else {
      console.log("느리다! 서둘러!");
  }



};

callWebService(evaluateSpeed);
