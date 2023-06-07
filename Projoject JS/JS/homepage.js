let logIn=document.querySelector(".log-in");
let loginInput=document.querySelector(".login-input");
let registerInput=document.querySelector(".register-content");
let register=document.querySelector(".register");
let outAccout=document.querySelector(".link");
let login=document.querySelector(".login");
let userLogin=document.querySelector(".user-login");
let userSingup=document.querySelector(".user-singup");
let logiNotifications = document.querySelector(".login-notification");
logIn.addEventListener("click",function(){
    registerInput.style.display="none";
    loginInput.style.display="block";
    logIn.style.borderBottom= "4px solid black"
    register.style.borderBottom= "none"
});
register.addEventListener("click",function(){
    loginInput.style.display="none";
    registerInput.style.display="block";
    register.style.borderBottom= "4px solid black"
    logIn.style.borderBottom= "none"
})
outAccout.addEventListener("click",function(){
    login.style.display="none";
    logiNotifications.style.display="none";
});
userLogin.addEventListener("click",function(){
    login.style.display="block";
    registerInput.style.display="none";
    loginInput.style.display="block";
    logIn.style.borderBottom= "4px solid black"
    register.style.borderBottom= "none"



});
userSingup.addEventListener("click",function(){
    login.style.display="block";
    loginInput.style.display="none";
    registerInput.style.display="block";
    register.style.borderBottom= "4px solid black"
    logIn.style.borderBottom= "none"

});


