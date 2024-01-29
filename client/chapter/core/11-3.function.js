/* ---------------------- */
/* Functions → Arrow      */
/* ---------------------- */

const calculateTotal = function(moneyA, moneyB, moneyC, moneyD) {
    return moneyA + moneyB + moneyC + moneyD;
  }
  
  let resultX = calculateTotal(10000, 8900, 1360, 2100);
  let resultY = calculateTotal(21500, 3200, 9800, 4700);
  let resultZ = calculateTotal(9000, -2500, 5000, 11900);
  
// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);


// 함수 선언 → 화살표 함수 (표현)식

// spread syntax    ...arr

//                //  rest parameter
// let calcAllMoney = (...args)=>{

// args 배열을 순환하여 모든 수의 합을 구하자!

// let total = 0;
// for
// for(let i = 0; i < args.length; i++){
// total += args[i];
// }

// for..of
// for(let value of args) total += value

// forEach
// args.forEach(item => total += item)

   
// reduce

// args.reduce((acc,cur)=> acc + cur,0)


// return args.reduce((acc,cur)=> acc + cur,0)
// };

                    //  rest parameter
let calcAllMoney = (...args)=> args.reduce((acc,cur)=> acc + cur,0);

console.log( calcAllMoney(10,30,40,50) );

const creatUser = (name,age)=> ({name:name, age:age})
    

// 화살표 함수와 this



// 자바스크립트 함수는 양면의 얼굴 (일반함수/생성자함수)

// const Button = ()=> {

// }

// class Button2{

// }

// // const a = Button() // undifined / 일반함수

// const c = new Button2()  // new를 붙히면 다 객체가 생성된다 / 생성자함수




/* 다음 함수를 작성해봅니다. -------------------------------------------------- */
  
// pow(numeric: number, powerCount: number): number;
let pow; 
  
// repeat(text: string, repeatCount: number): string;
let repeat; 


// 정리하면
// 화살표 함수 = 일반함수에 사용 (함수 중심 설계)
// 클래스 구문 = 생성자 함수에 사용 (객체 중심 설계)
//


// this : 나를 호출한 대상을 this로 찾음

// 화살표 함수
// this : 가지고 있지 않음. 내 상위 영역에서 찾음


// 객체의 매서드를 정의할때 concise method 사용
// 메서드 안에서 함수를 정의할때 arrowFunction 효율적임

const user = {
    name: '한태희',
    age:9,
    address:'경기도 고양시 일산동구',
    grades: [80,40,15],
    totalGrades(){

        this.grades.forEach((item)=>{
      
            this.total += item
          })
      
          return this.total
          // console.log(this); // user
          
          // const sayHi = () => {
          //   console.log(this);
          // }
          
          // sayHi()

    }
}