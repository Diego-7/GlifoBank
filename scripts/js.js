//Cookie Advice Bar
function hideCookieBox(){
    
let cookieHide = document.querySelector('.cookie_advice');
cookieHide.style.display = 'none'
}

//login home page
const loginDiv = document.querySelector(".login");
const btnLogin = document.querySelector(".loginBtn");
const closeBtn = document.querySelector('.loginClose');

function logIn(){

    loginDiv.style.display = 'block';

    btnLogin.style.display = 'none';

    closeBtn.style.display = 'block';

}

const closeLogin = document.querySelector(".loginClose");

//close login div button
closeLogin.addEventListener('click', () =>{
    if(closeLogin.click){

        loginDiv.style.display = 'none';

        closeBtn.style.display = 'none';

        btnLogin.style.display = 'block';
    }
})








