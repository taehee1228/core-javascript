/* -------------------------- */
/* Optional Chaining          */
/* -------------------------- */


const portableFan = {
    maker: 'fromB',
    brand: 'FD221',
    type: 'neckband',
    photo: {
      static: 'https://bit.ly/3OS50UD',
      animate: 'https://bit.ly/3P8646q'
    },
    getFullName() {
      return `${this.brand}, ${this.maker}`;
    },
  };
  
  // 아래 코드는 문제가 있어 런타임 중 오류가 발생합니다.
 //   console.log(portableFan.photos.animate);
  
  // 오류를 발생시키지 않으려면 아래와 같이 작성해야 합니다.
  // if ('photos' in portableFan) {
  //   if ('animate' in portableFan.photos) {
  //     console.log(portableFan.photos.animate);
  //   }
  // }
  
  
  // 위 구문을 논리곱 연산자를 사용한 방식으로 변경해봅니다.
  
  portableFan && portableFan.photos && portableFan.photos.animate
  // 있다면 반환 없으면 안함   


  // 위 구문을 옵셔널 체이닝을 사용한 구문으로 변경해봅니다.
  
  portableFan.photos?.animate
  


  // 메서드 사용 시, 옵셔널 체이닝을 사용해봅니다.

  const fullName = portableFan.getFullName?.();  

  console.log(fullName);
  
  // 객체의 프로퍼티 접근 시, 옵셔널 체이닝을 사용해봅니다.
  


  // web API
  // web Application Programming Interface
  // API란 남들이 만들어 놓은 걸 가져오기 
  // sync(동기) & async(비동기)
  // 순차적 실행, !(비)순차적 실행
  // 순차적 실행을 할때 런타임 속도에 따라 실행 순서가 달라진다.
  // 그럼 비동기적 실행을 할려면? web API를 사용하면 된다.

  
  // debounce throttle
//   const timer = setTimeout(()=>{
//     console.log('야!');
//   },3000);

//   console.log(timer);   // 랜덤한 값

//   clearTimeout(timer)   // timer 제어 빠꾸먹이기

//   console.log(1);
//   console.log(2);
//   console.log(3);


// 카운트 새기
// let count = 0;

// const timer = setInterval(()=>{
//     console.log(++count);

//     if(count == 100){
//         clearInterval(timer);
//     }
// },10);


const button = document.querySelector('.click');

setTimeout(()=>{
    const template = `
    <button type="button" class="click">click</button>
    `
    document.body.insertAdjacentHTML('beforeend',template)
})

button?.addEventListener('click',()=>{

})