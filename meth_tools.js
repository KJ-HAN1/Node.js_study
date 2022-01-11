//2022-01-10  node.js study



// ------------------------------------------------
function add(a,b){
    return a+b;
}

//모델 외부에 add()함수를 공개하는 과정
exports.plus = add; 
// plus라는 이름으로 외부에 공개