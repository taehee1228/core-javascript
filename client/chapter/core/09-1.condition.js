/* ---------------- */
/* Condition        */
/* ---------------- */

// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No

// 영화 봤니?


// 영화 볼거니?


//let didWatchMovie = confirm('영화 봤니?');
// let goingToWatchMovie;


// if(!didWatchMovie){ //부정

//     let goingToWatchMovie = confirm('영화 볼거야?');

//     if(goingToWatchMovie) {
//         let withWho = prompt('누구랑 볼거니?');

//         if(withWho === '너'){
//             console.log('어머...');
//         }else if(withWho === '엄마'){
//             console.log('효자네');
//         }else{
//             console.log('내가 아니라고?');
//         }
//     }else{
//         console.log('꼭 봐 재밌어');
//     }

// }else{  //긍정

//     console.log('아 봤구나..');

// }


// console.log(didWatchMovie);

// if 문(statement)

// else 절(caluse)

// else if 복수 조건 처리

// 조건부 연산자

let didWatchMovie = 'no';
let goingToWatchMovie = 'yes'

// 삼항식

let message = didWatchMovie.includes('yes') 
    ? '그거 재밌더라' 
    : goingToWatchMovie.includes('yes') 
        ? '재밌겠다!' 
        : '난 별론데..?';

console.log(message);

// 멀티 조건부 연산자 식

function render(node,isActive){
    const template = /* html */`
      <img src="${ isActive ? 'https://i.namu.wiki/i/e96PXOsJ56hN0-4EPQ1RufvB3aW81fiFjVTFNN4xhb5IDNXEXNv4l_0GDDMOkIhx5M2um5Eae6tdqBqkYJs74MiMPRyDvIPX2cr2ThMckcvtD9zZycnfwl9EeYJNrMGUbOerkg1eXKKzRqcAtPWj8Q.webp' : 'https://mblogthumb-phinf.pstatic.net/20150211_72/kimsdky_1423621661395MdYrd_JPEG/naver_com_20150211_111942.jpg?type=w420'  }" alt=""/>
    `
    node.insertAdjacentHTML('beforeend',template);
    
  }