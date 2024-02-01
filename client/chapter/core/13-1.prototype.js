/* ----------------------------- */
/* Prototype and inheritance     */
/* ----------------------------- */

// 프로토타입 상속(prototypal inheritance)을 사용하여 객체를 확장합니다.

// 여러가지 동물들을 키우는 게임 : 고양이,강아지,호랑이,사자,늑대,여우


// 동물 -> 호랑이 -> 어떤 호랑이 


const animal = {
    legs: 4,
    tail: true,
    stomach: [],
    get eat(){
        return this.stomach
    },
    set eat(food){
        this.prey = food;
        this.stomach.push(food)
    }
}

const tiger = {
    pattern: '호랑이무늬',
    hunt(target){
        this.prey = target;
        return `${target}에게 조용히 접근합니다.`
    },
    __proto__: animal
}

// tiger.__proto__ = animal


const 백두산호랑이 = {
    color: 'white',
    name: '백랑이',
    __proto__:tiger
}

const 한라산호랑이 = {
    color: 'greenyellow',
    name: '선돌이',
    __proto__: tiger
}





// 생성자 함수 


function Animal(){
    this.legs = 4;
    this.tail = true;
    this.stomach = [];

    this.getEat = function(){
        return this.stomach
    }

    this.setEat = function(food){
        this.prey = food;
        this.stomach.push(food)
    }
}

const a = new Animal();


function Tiger(name){
    Animal.call(this)   // 위에 능력을 싹다 읽어서 부여 애니멀을 대신 호출해줘 this를(애니멀 안에있는)
    this.name = name;
    this.pattern = '호랑의무늬';
    this.hunt = function(target){
        this.prey = target
        return `${target}에게 천천히 접근한다.`     // 인스턴스 메서드 생성자 함수를 통해 만 쓸수 있음
    }
}

Tiger.bark = function(){        // 스태틱 메서드 객체 생성 없이 아무나 사용 가능
    return '어흥'
}

Tiger.prototype = a

const 용용산호랑이 = new Tiger('한돌이')




// call, apply, bind 함수의 메서드
// this를 전달해줄 수 있음 this를 바꿔줄수 있는 능력

function sum(a,b){

    console.log(this);
    console.log(a + b);
}

// 대신 실행함 메게뱐수 어떻게 받음?

// 바로 실행
// sum.call('a',10,20)
// sum.apply('a',[10,20])

// this를 묶는다. 필요할때 꺼내쓴다.
const aa = sum.bind('a',10,20);