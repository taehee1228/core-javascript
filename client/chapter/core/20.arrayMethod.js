/* ------------------------------ */
/* Array's Methods                */
/* ------------------------------ */

// Array.isArray


const isArray = data => Array.isArray(data);

function isArray2 (data){
    return Array.isArray(data)
}

const people = [
    {
        id: 0,
        name: '박가희',
        age: 25,
        job: '명탐정 코난 범인',
        alt: '어두컴컴한 방안에 있는 박가희님',
        imageSrc: 'FAkq31'
    },
    {
        id: 1,
        name: '김보미',
        age: 24,
        job: '짱용',
        imageSrc: 'FGack21'
    },
    {
        id: 2,
        name: '한태희',
        age: 25,
        job: '삐돌이..?',
        imageSrc: 'Fkmen34'
    },
    {
        id: 3,
        name: '이원명',
        age: 81,
        job: '이도령',
        imageSrc: 'Tq8zil'
    }
]



/* 요소 순환 ---------------------------- */

// forEach 값을 반환하지 x

let nameArray = [];

people.forEach((item,index)=>{    // 매개변수에 콜백 함수를 받는다
    nameArray.push(item.name)
})

// console.log(nameArray);

// 이벤트가 많을때 이런 방식을 쓰면? x 이벤트 위임 (event delegation)

const list = document.querySelectorAll('span');

list.forEach((item,index)=>{
    item.addEventListener('click',function(){
        console.log(index);
    })
})



// list[0].addEventListener('click',()=>{
//     console.log('first!');
// })

// list[1].addEventListener('click',()=>{
//     console.log('second!');
// })


/* 원형 파괴 ----------------------------- */


const arr = [10,100,1000,10_000];

// push
// pop
// unshift
// shift
// reverse
const reverse = [...arr].reverse();

// splice
// const splice = arr.splice(1,2,'javascript','css')  // slice 상위버전 (제거,추가 등등.. 가능)

// sort
// arr.sort((a,b)=>{
//     return a - b
// })  // 배열을 정리


/* 새로운 배열 반환 ------------------------ */

// concat
// slice
// toSorted
// toReversed

const newArray = arr.toReversed()

// toSpliced

// map 새로운 배열을 반환함.

// const job = people.map((item,index)=> item.job)

const card = people.map((item,index)=>{
    return /* html */ `
    <div class="userCard card=${index+1}">
        <div class="imageField">
            <img src="${item.imageSrc}.jpg" alt="${item.alt}">
        </div>
        <span>이름 : ${item.name}</span>
        <span>나이 : ${item.age}</span>
        <span>직업 : ${item.job}</span>
    </div>
    `
})

// card.forEach((item)=> 
// document.body.insertAdjacentHTML('beforeend',item))

const newAge = people.map(item => item.age +1)

const 젊은이들 = people.filter((item)=>{
    return item.name == '박가희'
})

const find = people.find((item)=>{ //find: 찾은 객체를 반환 findIndex: 찾은 객체의 id를 반환
    return item.job == '삐돌이..?'
})

// filter는 여러개를 반환 find는 하나만을 반환
// filter는 배열로 반환 find는 객체로 반환


/* 요소 포함 여부 확인 ---------------------- */

// indexOf
// lastIndexOf
// includes

/* 요소 찾기 ------------------------------ */

// find
// findIndex

/* 요소 걸러내기 --------------------------- */

// filter

/* 요소별 리듀서(reducer) 실행 -------------- */
const totalAge = people.reduce((acc,cur)=>{
    acc + cur.age
  },0)


  const tem = people.reduce((htmlCode,cur)=>{
    return htmlCode + `<div>${cur.name} : ${cur.age}</div>`
  },'')
  
  
  document.body.insertAdjacentHTML('beforeend',tem)

/* string ←→ array 변환 ------------------ */

// split : 문자 → 배열

const str = '원명 가희 소정 설아 경민 진욱'

const stringToArray = str.split(' ');
console.log( stringToArray );



// join : 배열 → 문자

const arrayToString = stringToArray.join('/');
console.log( arrayToString );