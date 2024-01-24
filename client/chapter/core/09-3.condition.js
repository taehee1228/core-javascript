/* ---------------- */
/* Switch           */
/* ---------------- */

const value = 10;

switch(value){
    case 10 :       // if(value == 10)
        console.log('10입니다.');
        break;

    case 20 :       // if(value == 20)
        console.log('20입니다.');
        break;

    default:        //else
        console.log('난수입니다.');
}

const MORNING    = '아침',
      LUNCH      = '점심',
      DINNER     = '저녁',
      NIGHT      = '밤',
      LATE_NIGHT = '심야',
      DAWN       = '새벽';

let thisTime = DAWN;

switch (thisTime) {
    case MORNING:
        console.log('뉴스 기사 글을 읽는다.');
        break;
    case LUNCH:
        console.log('자주 가는 식당에 가서 식사를 한다.');
        break;
    case DINNER:
        console.log('동네 한바퀴를 조깅한다.');
        break;    
    case NIGHT:
        console.log('친구에게 전화를 걸어 수다를 떤다.');
        break;
    case LATE_NIGHT:
        console.log('한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.');
        break;
    case DAWN:
        console.log('한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.');
        break;
    default:
        break;
}

/* 다양한 상황에 맞게 처리 --------------------------------------------------- */

// 조건 유형(case): '아침'
// '뉴스 기사 글을 읽는다.'

// 조건 유형(case): '점심'
// '자주 가는 식당에 가서 식사를 한다.'

// 조건 유형(case): '저녁'
// '동네 한바퀴를 조깅한다.'

// 조건 유형(case): '밤'
// '친구에게 전화를 걸어 수다를 떤다.'

// 조건 유형(case): '심야'
// 조건 유형(case): '새벽'
// '한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.'


/* switch문 → if문 변환 --------------------------------------------------- */

if(thisTime === MORNING){
    console.log('디스코드를 켠다')
  }else if(thisTime === LUNCH){
    console.log('체력 보충을 위한 잠을 잔다.')
  }else if(thisTime === DINNER){
    console.log('회고조 팀원들끼리 코드리뷰')
  }else if(thisTime === NIGHT){
    console.log('내일을 위한 체력을 위해 잠을 잔다.')
  }else if(thisTime === LATE_NIGHT || thisTime === DAWN){
    console.log('내일의 수업을 위한 info글 읽다가 잠이 들어');
    console.log('꿈속에서 에러를 해결하는 나의 모습을 찾는다.');
  }



/* switch vs. if -------------------------------------------------------- */

//const num = +prompt('숫자를 입력해주세요');     //숫자를 받을려면 +를 붇히자.

// 함수를 쓰는 이유 : 코드의 재사용성을 높이기 위해 => 매개변수의 활용
// 관심사의 분리 separation of concerns
// 함수는 하나의 기능만을 수행하는게 낫지 않을까요? *범쌤
// 하지만 회사나 상황에 따라 다르다

function getRandom(n){
   return Math.floor(Math.random() * n); //0~6까지의 숫자 랜덤
}

function getDay(number){    //parameter(인자)
    switch (number) {
          case 0: return '일';
          case 1: return '월';
          case 2: return '화';
          case 3: return '수';
          case 4: return '목';
          case 5: return '금';
          case 6: return '토';
    }
}

//getDay(getRandom())    //argyment(인수)

// 요일을 뽑아내는 함수 => 요일을 가지고 월~금 : 평일입니다. 일,토 : 주말입니다.

function weekend(){
    const today = getDay(getRandom(7));

    // if(today.includes('토') || today.includes('일')){
    //     return `오늘은 ${today}요일이며 주말입니다.`;
    // }else{
    //     return `오늘은 평일입니다.`
    // }

    return today.includes('토') || today.includes('일') ? '주말입니다.' : '평일입니다.' // 삼항식
}

const result = weekend();

console.log(result);