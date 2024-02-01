/* ----------------------------- */
/* Classes                       */
/* ----------------------------- */

// 앞서 함수로 정의한 내용들을 class문법을 사용해 재정의 합니다.

// constrructor method는 최초 1회만 실행됨. (n회? x)
// 초기값을 설정할때 사용된다. 간혹 1회만 실행해야 할 때 사용한다.

class Animal {
    constructor(name){
        this.name = name
        this.stomach = [];
        this.legs = 4;
        this.tail = true
    }

    getEat(){
        return this.stomach
    }

    setEat(food){
        this.prey = food;
        this.stomach.push(food);
    }
}

// const a = new Animal('호돌이')


class Tiger extends Animal{

    constructor(name){
        super(name)     //부모의 constructor를 실행
        this.pattern = '호랑이무늬'
    }

    static options = {
        version: '0.0.1',
        company: 'like-lion',
        ceo: '___'
    }

    static bark(){
        return '어흥!'
    }


    hunt(target){
        return `${target}에게 조심히 접근한다.`
    }
}

const 한라산호랑이 = new Tiger('한돌이');