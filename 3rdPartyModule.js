//2022_01_12 3rd Party Module

// 다른 개발자나 회사들이 만들어서 인터넷상의 공개 저장소에서 제공하는 모듈
// npm install cowsay
//

const cowsay = require('cowsay');

console.log(cowsay.say({
    text : "I love javascript",
}));