//2022_01_12 동기/비동기 실행

//readFileSync - 동기함수
//readFile - 비동기 함수
// 비동기 실행은 콜백을 등록후 처리되는대로 
//
const fs = require('fs');
//동기 실행 부분
/*
console.log('Start');

let content = fs.readFileSync('./new', 'utf8');
console.log(content);

console.log('Finish');
*/


//비동기 실행
console.log('Start');

//콜백 등록
fs.readFile('./new', 'utf8',(error,data)=>{
    console.log(data);
});

console.log('Finish');
