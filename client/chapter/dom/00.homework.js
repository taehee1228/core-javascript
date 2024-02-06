// querySelector

const idField = document.querySelector('#idField');
const submit = document.querySelector('.btn');


// eventListener

function handeleCheckId(){
    // console.log(this.value);

    if(this.value == 'hello'){
        console.log('success');
        idField.classList.remove('is-active')

    }else{
        console.log('error!');
        idField.classList.add('is-active')
    }
}

function handleSubmit(e){

    e.preventDefault();

    console.log('제출!!');
    
}

idField.addEventListener('input',handeleCheckId)

submit.addEventListener('click',handleSubmit)

// classList


// preventDefault

