

// localStorage는 브라우저를 닫고 다시 실행해도 데이터가 사라지지 않습니다.
// 그렇기에 여러 웹사이트에서 사용합니다. (로그인, 최근 본 상품 등..)

import { isString } from "./typeOf.js";


const {localStorage:storage} = window;



export function setStorage(key,value){
  
  return new Promise((resolve, reject) => {
    if(isString(key)){
      storage.setItem(key,JSON.stringify(value))
      resolve()
    }else{
      reject({message:'key는 문자 타입이어야 합니다.'});
    }
  })
}


export function getStorage(key){

  return new Promise((resolve, reject) => {
    if(isString(key)){
      resolve(JSON.parse(storage.getItem(key)))
    }else{
      reject({message:'key는 문자 타입이어야 합니다.'});
    }
  }) 
}


export function deleteStorage(key){
  return new Promise((resolve) => {
    !key ? storage.clear() : storage.removeItem(key);
    resolve();
  })

}
