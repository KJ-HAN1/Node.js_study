//2022-01-10  node.js study



// ------------------------------------------------
// let m = require('./meth_tools.js');

// console.log(m.plus(1, 2));


// add 2022_01_12

//이미 내장된 모듈(코어모듈)이므로 경로를 지정해줄 필요x1

const fs = require('fs');

//현재 디렉토리에 있는 파일을 배열에 담기
let fileList = fs.readdirSync('.');
console.log(fileList);

//새로운 파일 생성 name = new
fs.writeFileSync('new', 'Hello Node.js!');

//코어모듈 os의 정보를 가져올 수 있음.
const os = require('os');

console.log(os.cpus());