import {
    setStorage, 
    getStorage, 
    deleteStorage,
    getNode,
    clearContents
} from './lib/index.js'

// - 1. textField의 값을 로컬스토리지에 저장해주세요. (setStorage)

const textField = getNode('#textField');
const clear = getNode('[data-name="clear"]')

// 텍스트 값을 저장
const handleTextField = (e) => {
    const value = e.currentTarget.value;
    setStorage('text',value);
}

// clear 버튼 누를시 값을 지우기.
const handleClear = () => {

    deleteStorage('text').then(()=>{
  
      clearContents(textField)
      
    })
    
  }

textField.addEventListener('input',handleTextField);
clear.addEventListener('click',handleClear);




// function init(){
//     console.log('init');
// }

// window.addEventListener('DOMContentLoaded',init);

// IIFE

(()=>{

    getStorage('text').then((res)=>{
        textField.value = res;
    })

    // const data = await getStorage('text')
    // textField.value = data;

})()