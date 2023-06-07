let registerName = document.getElementById("register-name");
let registerEmail = document.getElementById("register-email");
let registerPassword = document.getElementById("register-password");
let registerPassword2 = document.getElementById("register-password-2");
let registerButton = document.querySelector(".register-button");
let notification1 = document.querySelector(".notification1");
let notification2 = document.querySelector(".notification2");
let notification3 = document.querySelector(".notification3");
let notification4 = document.querySelector(".notification4");
let notification5=document.querySelector(".notification5");
let small3= document.querySelector(".small-3");
let small4= document.querySelector(".small-4");
let formRegister=document.querySelector(".register-content")
formRegister.addEventListener("submit", function (e) {
    e.preventDefault();
    let arr = JSON.parse(localStorage.getItem("listUser"))||[]
    console.log("Đá");
   function checkLogin(){
    if(arr==null){
        arr=[];
    }
   }
    checkLogin();
    let registerNames = registerName.value;
    let registerEmails = registerEmail.value;
    let registerPasswords = registerPassword.value;
    let registerPassword2s = registerPassword2.value;
  let PASSWORD_PATTERN = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

    if (registerNames.length > 8 && registerNames.length < 20) {
        notification1.style.display = "none";
        if (registerPasswords.length > 8 && registerPasswords.length < 20) {
            notification2.style.display = "none";
            if (checkExit(registerNames)) {
                notification4.style.display = "none"
              if(registerEmails.length>0){
                if(PASSWORD_PATTERN.test(registerPasswords)){
                    notification5.style.display = "none"
                    if (registerPasswords === registerPassword2s) {
                        notification3.style.display = "none"
                        let user={
                            name:registerNames,
                            email:registerEmails,
                            password:registerPasswords,
                            status:"Đang sử dụng",
                            check:"offline"
                        }
                      arr.push(user);
                      localStorage.setItem('listUser',JSON.stringify(arr));
                      Swal.fire({
                        icon: 'success',
                        title: 'Đăng Kí Thành Công',
                        showConfirmButton: false,
                        timer: 1500
                      })
                      document.getElementById("register-name").value="";
                      document.getElementById("register-email").value="";
                      document.getElementById("register-password").value="";
                      document.getElementById("register-password-2").value="";
    
                    }else{
                        notification3.style.display = "block"
                    }
                   }else{
                    notification5.style.display = "block"
                   }
              }else{
                Swal.fire({
                    icon: 'error',
                    title: 'Email Không Được để trống',
                    text: ' ',
                    showConfirmButton:false,
                    timer:1000
                  })
              }
            } else {
                notification4.style.display = "block"
            }
        } else {
            notification2.style.display = "block";
        }
    } else {
        notification1.style.display = "block";
    }
    function checkExit(Username){
        for(let i = 0;i<arr.length;i++){
            if(arr[i].name==registerNames){
                return false;
                break;
            }
        }
        return true;
    }
});
small3.addEventListener("click",function(){
    small3.style.display="none";
    small4.style.display="block"
    registerPassword.type="text"
    registerPassword2.type="text"

})
small4.addEventListener("click",function(){
    small4.style.display="none";
    small3.style.display="block"
    registerPassword.type="password"
    registerPassword2.type="password"
})
