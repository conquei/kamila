const EmailInput = document.querySelector ('#emailInput');
const PasswordlInput = document.querySelector ('#password');
const PasswordTwoInput = document.querySelector ('#password2');
const Check = document.querySelector("#check");
const Result = document.querySelector(".result");

const EmailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PasswordRegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/

Check.addEventListener("click", () => {
    if(  EmailRegExp.test(EmailInput.value) &&
         PasswordRegExp.test(PasswordlInput.value) &&
         PasswordlInput.value===PasswordTwoInput.value){
        Result.innerText = "Ok"
        Result.style.color = "violet"
    }else {
        Result.innerText = " Not ok"
        Result.style.color = "red"
    }
});

const showPasswordButton = document.querySelector('#showPasswordBtn');
const passwordInput = document.querySelector('#password');
const  timeShowPass = 1000;
if (showPasswordButton && passwordInput) showPasswordButton.addEventListener('click', showPassword);

function showPassword(){
  passwordInput.setAttribute('type', 'text');
  setInterval(function(){
        passwordInput.setAttribute('type', 'password');
  }, timeShowPass);
}

let big_block = document.querySelector(".big_block")
let min_block =document.querySelector(".min_block")

counter = 0 
const moving = ()=>{
    if(counter<=450){
        setTimeout(()=>{
            min_block.style.left=`${counter}px`
            counter+=10
            moving()    
        },200)}
}
moving()