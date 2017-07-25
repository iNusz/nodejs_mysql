/**
 * Created by SeungHoShin on 2017. 7. 21..
 */

// 1. 서버모듈
var http = require("http");
var router = require("./a_router/router");
// 2. 서버를 생성
var server = http.createServer(function(request, response){
    // 요청 url 분석
    console.log("in server");
    //---> 모든 요청에 대해 a_router.js 로 보낸다
    router.parse(request, response);

});
// 3. 서버를 시작
server.listen(8080, function(){
    console.log("server's running...");
});




// // 1. 서버 모듈 가져오기
// var http = require("http");
//
// // 2. 서버 생성하기
// var server = http.createServer(function (request, response) {  //()안에 콜백펑션 <-사용자 요청이 있을시에 호출
//     // 브라우저에서 http://localhost 를 요청하면 , Hello 메시지 전송하는 코드를 작성e
//
//     // request <- node.js가 사용자 요청정보를 담아서 넘겨준다
//     // response <- node.js 가 사용자에게 응답할 때 사용하라고 담아서 넘겨준다
//     // 정상적으로 처리하고 값을 넘겨준다 (200번)
//
//     requestParser(request, response);
//
//
// });
//
// // 3. 서버를 시작
// server.listen(8080, function () {    // 콜백펑션 <- 스타트후에 호출 : 단순 참고용 로그
//     console.log("server is running");
// });
//
// // 요청분석
// function requestParser(request, response) {
//     console.log(request.url);
//     if (request.url == "/hello") {
//         sendResponse(response);
//     }else{
//         send404(response);
//     }
// }
// // 응답처리
// function sendResponse(response) {
//     response.writeHead(200, {'Content-Type': 'text/html'}); // 데이터 타입은 hashmap 형태이다 , 키와 값의 형태이다
//     for (i = 0; i < 10; i++) {
//
//         response.write(i + "<br/>");
//     }
//     response.end("Hello world");
// }
//
// //오류처리
// function send404(response) {
//     response.writeHead(404,{'Content-Type':'text/html'});
//     response.end("404 Page Not Found");
// }
