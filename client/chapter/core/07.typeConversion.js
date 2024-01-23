/* --------------------- */
/* Type Conversion       */
/* --------------------- */


/* 데이터 → 문자 ----------------------------------------------------------- */

// number

const YEAR = 2024;

console.log(typeof String(YEAR)); //명시적 형 변환
console.log(YEAR + ''); // 암시적 형 변환
// console.log(   (YEAR + '     '.trim())   );  // 암시적 형 변환



// undefined, null

let days = null;
let weekend;

console.log(days + '');
console.log(undefined + '');

// css animation VS javascript animation    *성능차이가 있다. 지금은 딱히..

// boolean
let isClicked = false;

console.log(isClicked + '');



/* 데이터 → 숫자 ----------------------------------------------------------- */

// undefined

let friend;
console.log( Number(friend) );

// null
let money = null;
console.log( Number(money) );



// boolean

let cutie = true;
console.log( Number(cutie) );

// string

let num = '250';
console.log( Number(num) ); //명시적 형변환
console.log( num * 1 ); //암시적 형변환
console.log( num / 1 ); //암시적 형변환
console.log( +num );    //암시적 형변환


// numeric string

const width = '105.3px'; //앞이나 중간에 문자가 들어가면 애러가 뜸

console.log( Number(width) );
console.log( parseInt(width) );
console.log( parseFloat(width) );







/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''

// 빈 문자 -> '' / 공백 문자 -> ''

console.log(Boolean(friend));
console.log(Boolean(money));
console.log(Boolean(' '));
console.log(Boolean(0));
console.log(Boolean('0'));



// 위에 나열한 것 이외의 것들 

console.clear();

//const value = Number(prompt('값을 입력해주세요'));
//const value = prompt('값을 입력해주세요') * 1;
//const value = prompt('값을 입력해주세요') / 1;
const value = +prompt('값을 입력해주세요');
const numberValue = +value;


console.log( numberValue + 50 );


// console.log(Number(value) + 50);    //명시적 형 변환
// console.log( (value/1) + 50);       //암시적 형 변환