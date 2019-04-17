// 모듈을 추출합니다.
const express = require('express');
const bodyParser = require('body-parser');
// 서버를 생성/실행합니다.
const app = express();
app.listen(52273, () => {
    console.log('Server Running at http://127.0.0.1:52273');
});
// 미들웨어를 추가합니다.
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(express.static('public'));

// 변수를 선언합니다.
let userCounter = 0;
const users = [];
// 라우트합니다.
app.get('/user', (request, response) => {
    response.send(users);
});
app.post('/user', (request, response) => {
    // 변수를 선언합니다.
    const body = request.body;
    // 예외를 처리합니다.
    if (!body.name)
        return response.status(400).send('name을 보내주세요');
    else if (!body.region)
        return response.status(400).send('region을 보내주세요');
    // 변수를 추출합니다.
    const name = body.name;
    const region = body.region;
    // 데이터를 저장합니다.
    const data = {
        id: userCounter++,
        name: name,
        region: region
    };
    users.push(data);
    // 응답합니다.
    response.send(data);
});
app.get('/user/:id', (request, response) => {
    // 변수를 선언합니다.
    const id = request.params.id;
    // 데이터를 찾습니다.
    const filtered = users.filter((user) => user.id == id);
    // 응답합니다.
    if (filtered.length == 1)
        response.send(filtered[0]);
    else
        response.status(404).send('데이터가 존재하지 않습니다.');
});
app.put('/user/:id', (request, response) => {
    // 변수를 선언합니다.
    const id = request.params.id;
    let isExist = false;
    // 데이터를 수정합니다.
    users.forEach((user) => {
        // 데이터가 존재한다면
        if (user.id == id) {
            // 수정합니다.
            isExist = true;
            if (request.body.name)
                users[id].name = request.body.name;
            if (request.body.region)
                users[id].region = request.body.region;
            // 응답합니다.
            response.send(user)
        }
    });
    // 데이터가 존재하지 않는다면
    if (!isExist)
        // 응답합니다.
        response.status(404).send('데이터가 존재하지 않습니다.');
});
app.get('/user', (request, response) => {
    // 변수를 선언합니다.
    const region = request.params.region;
    // 데이터를 찾습니다.
    const filtered = users.filter((user) => user.region == region);
    // 응답합니다.
    if (filtered.length >= 1)
        response.send(filtered);
    else
        response.status(404).send('데이터가 존재하지 않습니다.');
});
app.delete('/user', (request, response) => {
  // 변수를 선언합니다.
  const region = request.body.region;
  var regions = new Array();
  let isExist = false;
  // 데이터를 수정합니다.
  users.forEach((user) => {
      // 데이터가 존재한다면
      if (user.region == region) {
          regions.push(user);
          isExist = true;


      }
  });
  response.send(regions);
  // 데이터가 존재하지 않는다면
  if (!isExist)
      // 응답합니다.
      response.status(404).send('데이터가 존재하지 않습니다.');
});
