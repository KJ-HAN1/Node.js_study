// 2022_01_13 EventEmitter Module

//EventEmitter클래스가 있어야 이벤트를 발생시킬 수 있음.

//

//events코어모듈 가져오기
const EventEmitter = require('events');

//단지 클레스 이기때문에 객체를 만들어 줘야 사용가능!
const myEmitter = new EventEmitter();

//test 이벤트가 발생했을때 실행될 콜백함수 등록
// on = addListener
myEmitter.on('test', () =>{
    console.log('Success!');
});

// once = 이벤트에 대해 최초1회만 발생시킴. 발생이후 삭제되는 핸들러
myEmitter.once('test',()=>{
    console.log('only once!');
});

//인위적으로 test 이벤트 발생시키기
myEmitter.emit('test')
myEmitter.emit('test')
myEmitter.emit('test')

//test이벤트에 어떤 이벤트 핸들러가 설정되있는지 확인하기 위한listeners메소드
console.log(myEmitter.listeners('test'));

//off = 이벤트 핸들러 해제
//off메소드를 사용하기 위해선 아래와 같이 변수를 할당해 주어야함!!
//(여러개의 핸들러일 경우 배열에 넣어서 관리)

// const callback = () => {
//   console.log('Success!');
// };

// myEmitter.on('test', callback);
// myEmitter.off('test', callback);

// myEmitter.emit('test');
