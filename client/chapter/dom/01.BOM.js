/* ------------------------------ */
/* Browser Object Model           */
/* ------------------------------ */

/*
JavaScript가 작동하는 플랫폼은 호스트(host)라고 불립니다. 
호스트는 브라우저, 웹서버, 심지어는 커피 머신이 될 수도 있습니다. 

각 플랫폼은 해당 플랫폼에 특정되는 기능을 제공하는데, JavaScript 명세서에는 
이를 호스트 환경(host environment) 이라고 부릅니다.

호스트 환경은 JavaScript 코어에 더해 플랫폼에 특정되는 객체와 함수를 제공합니다. 
웹 브라우저는 웹 페이지를 제어하기 위한 수단을 제공하고, Node.js는 서버를 포함해 
애플리케이션 개발에 필요한 다양한 기능을 제공합니다.

브라우저 객체 모델(Browser Object Model, BOM)은 문서 이외의 모든 것을 
제어하기 위해 브라우저(호스트 환경)가 제공하는 추가 객체를 나타냅니다.
*/


/* Window 객체 ----------------------------------------------------------- */

const { alert, confirm, prompt, setTimeout, setInterval } = window;


/* Location 객체 --------------------------------------------------------- */
// http://localhost:8080/js/index.html?type=listing&page=2#title

const { href, protocol, host, port, search, hash, replace, reload } = location;

const urlParams = new URLSearchParams(location.search);

// for (const [key, value] of urlParams) {
//   console.log(`${key}:${value}`);
// }


/* Navigator 객체 -------------------------------------------------------- */

const { platform, userAgent, language, onLine, geolocation } = navigator;



// return 을 줘도 값을 못 뱉을때 비동기적인 데이터를 꺼내야 될 때
// 시간이 오래 걸리는 가져오는 코드는 바로 가져오지 못한다
// 1초의 기다림 이후의 실행 무조건 settime? ㄴㄴ
// 그때 콜백 방식을 써보자
function getCoords(success) {
   
    navigator.geolocation.getCurrentPosition((data)=>{
        const {latitude:lat, longitude:long } = data.coords;

        success({lat,long}) // getCoords로 밖으로 뺴기
    })
}

getCoords((result)=>{   // success 함수를 지정
    console.log(result);
})
// 사용자 환경에 따라 달라지는 것이니 setTimeout만 사용해서 무작정 타이머를 늦춘다기보다
// 콜백을 통해서도 비동기 처리할 수 있는 것이다
// 저 데이터를 콘솔말고 직접 활용하려면 계속 getCoords 함수를 호출

// promise
// function getCoords(){

//     return new Promise((resolve, reject) => {
//       navigator.geolocation.getCurrentPosition((data)=>{
//         if(data){
//           const { latitude:lat, longitude:long } = data.coords;
//           resolve({lat,long})
//         }else{
//           reject({message:'error!'})
//         }
//       })
//     })
    
//   }

// 비디오 스트리밍 
//   navigator.mediaDevices.getUserMedia({video:true})
//   .then((stream)=>{
//     console.log(stream);

//     document.querySelector('#video').srcObject = stream
//   })

/* Screen 객체 ----------------------------------------------------------- */

const { width, height, availWidth, availHeight, orientation } = screen;


/* History 객체 ---------------------------------------------------------- */

const { back, forward, go, length, pushState, replaceState } = history;