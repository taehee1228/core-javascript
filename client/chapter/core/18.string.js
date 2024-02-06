/* -------------------- */
/* String Type          */
/* -------------------- */

let message = 'Less is more.';


// length 프로퍼티
let stringTotalLength = message.length;



// 특정 인덱스의 글자 추출
let extractCharacter = message[3];


// 문자열 중간 글자를 바꾸는 건 불가능 
// (기존 문자 변경 대신, 새로운 문자를 생성해야 함)
let immutableChangeCharacter;
// message[3] = 'a'    이건 바뀌지 않는다. (이니터블)


// 부분 문자열 추출
let slice = message.slice(1); // [1]번쨰 부터 추출해라
// let slice = message.slice(4,-1); // [4~-1]번째 까지 추출해라
console.log(slice);

let subString = message.substring(2,5); // 문자를 잘라낼 수 있다
console.log(subString);

// let subStr = message.substr; 잘 사용안하는


// 문자열 포함 여부 확인
let indexOf = message.indexOf('hi');    // 문자에 hi가 있으면 []값을 반환, 없으면 -1을 찍는다.
console.log(indexOf);

// 브라우저 확인하는 함수를 만들 수 있다.
function checkBrowser(){

    const agent = window.navigator.userAgent.toLowerCase();
    let browserName;
  
    switch (true) {
      case agent.indexOf('edge') > -1 : browserName = 'MS Edge'; break;
      case agent.indexOf('chrome') > -1 : browserName = 'chrome'; break;
      case agent.indexOf('safari') > -1 : browserName = 'Apple Safari'; break;
      case agent.indexOf('firefox') > -1 : browserName = 'FireFox'; break;
      case agent.indexOf('trident') > -1 : browserName = 'IE'; break;
    
    }
    
    return browserName;
  }

let lastIndexOf;

let includes = message.includes('Less');    // 불린 반환(true,false)

let startsWith = message.startsWith('Less');    // 불린 반환(true,false)
let endsWith = message.endsWith('more.');

let str = ' a   b           c               d'


// 공백 잘라내기
let trimLeft = str.trimLeft();  // 글자 왼쪽 공백 재거
let trimRight;
let trim = str.trim();  // 글자 왼쪽 오른쪽 공백 재거

let reg = str.replace(/\s*/g,'')    // \s*/g를 찾아서 ''로 바꾸어라

function normalText(string){
    return string.replace(/\s*/g,'')// 규식이형.. 모든 공백을 찾아서 없애죵
}

// 텍스트 반복
let repeat = message.repeat(3);



// 대소문자 변환
let toLowerCase = message.toLowerCase();
let toUpperCase = message.toUpperCase();


// 텍스트 이름 변환 유틸리티 함수
function toCamelCase(string) {  // 어떤 값이든 카멜케이스로
    return string.replace(/(\s|-|_)+./g, ($1) => $1.trim().replace(/(-|_)+/, '').toUpperCase())
  }
  
  function toPascalCase(string) {
    let name = toCamelCase(string);
    return name[0].toUpperCase() + name.slice(1);
  }