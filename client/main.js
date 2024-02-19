/* global gsap */


import { 
    tiger,
    delayP,
    insertLast,
    changeColor,
    getNode as $,
    renderSpinner,
    renderUserCard,
    renderEmptyCard,
    clearContents,
  } from "./lib/index.js";
  
  
  const END_POINT = 'http://localhost:3000/users'
  
  
  // [phase-1]
  
  // 1. user 데이터를 fetch 해주세요.
  // 2. 함수안에 넣기
  // 3. 유저 데이터 (이름만) 화면에 랜더링
  
  
  const userCardInner = $('.user-card-inner')
  
  async function renderUserList(){
  
    renderSpinner(userCardInner)
    
    try{
  
      await delayP(100)
      
      // $('.loadingSpinner').remove()
      gsap.to('.loadingSpinner',{
        opacity:0,
        onComplete(){
          $('.loadingSpinner').remove()
        }
      })
  
      const response = await tiger.get(END_POINT);
      const userData = response.data;
  
      userData.forEach(data => renderUserCard(userCardInner,data))
      changeColor('.user-card');
  
      gsap.from('.user-card',{
        x:100,
        opacity:0,
        stagger:0.1
      })
    }
    catch(err){
      renderEmptyCard(userCardInner);
    }
  
  }
  
  renderUserList()
  
  
  function handleDelete(e){
    const button = e.target.closest('button');
    const article = e.target.closest('article');
  
    if( !article || !button ) return;

    const id = article.dataset.index.slice(5) ;
  
    
    tiger.delete(`${END_POINT}/${id}`)
    .then(()=>{
  
      clearContents(userCardInner)  // 기존 유저의 목록 제거
      renderUserList()
  
    })
  }
  
  userCardInner.addEventListener('click',handleDelete)


  /* post 통신 */
  
  const createButton = $('.create');
  const cancelButton = $('.cancel');
  const doneButton = $('.done');
  
  
  
  const handleCreate = () => {
    gsap.to('.pop',{autoAlpha:1});
  }
  
  
  const handleCancel = (e) => {
    e.stopPropagation();
    gsap.to('.pop',{autoAlpha:0});
  }
  
  
  function handleDone(e){
    e.preventDefault() // html 태그의 기본 동작을 차단 
    
    const name = $('#nameField').value;
    const email = $('#emailField').value;
    const website = $('#siteField').value;
  

    // - 1. name,email,website 담고있는 새로운 객체 생성
    const obj = { name, email, website }

    // const obj = {
    //    name:name,
    //    email:email,
    //    website:website 
    // } 

    // - 2. post 통신의 body에 객체 전달
    tiger.post(END_POINT,obj).then(()=>{

      // - 3. 유저 목록 지우기  
      clearContents(userCardInner)

      // - 4. 유저 목록 랜더링하기
      renderUserList()

      // - 5. 팝업창 닫기
      gsap.to('.pop',{autoAlpha:0})
    })
  }
  
  
  createButton.addEventListener('click',handleCreate)
  cancelButton.addEventListener('click',handleCancel)
  doneButton.addEventListener('click',handleDone)