let loginName = document.getElementById("login-name-input");
let loginPassword = document.getElementById("login-password-input");
let loginButton = document.querySelector(".login-button");
let logiNotification = document.querySelector(".login-notification");
let historyShop = JSON.parse(localStorage.getItem('HistoryShop')) || [];
let small1 = document.querySelector(".small-1");
let small2 = document.querySelector(".small-2");
loginButton.addEventListener("click", function () {
    let array = JSON.parse(localStorage.getItem('listUser')) || [];
    let loginNames = loginName.value;
    let loginPasswordas = loginPassword.value;  
    for (let i = 0; i < array.length; i++) {

        if (loginNames == array[i].name && loginPasswordas == array[i].password && loginNames != "admin" && array[i].status == "Đang sử dụng") {
            location.href = "../HTML/shop.html";
            array[i].check = "online";
            logiNotification.style.display = "none";
            localStorage.setItem('listUser', JSON.stringify(array));
            for(let a=0;a<historyShop.length;a++){
                if(historyShop[a].Name==array[i].name){
                    historyShop[a].Status="online"
                    localStorage.setItem("HistoryShop",JSON.stringify(historyShop))
                }
            }
            break;
        } else if (loginNames == "admin" && loginPasswordas == "duy123") {
           
            location.href = "../HTML/admin.html";
            break;
        } else if (loginNames == array[i].name && loginPasswordas == array[i].password && loginNames != "admin" && array[i].status == "Khóa") {
            logiNotification.style.display = "none";
            Swal.fire({
                icon: 'error',
                title: 'Tài Khoản Đã Bị Khóa',
                text: ' ',
                showConfirmButton:false,
                timer:1000
              })
                  
            break;
        } else {
            logiNotification.style.display = "block";
            loginName.value = "";
            loginPassword.value = "";
        }
    }
});

small1.addEventListener("click", function () {
    small1.style.display = "none";
    small2.style.display = "block";
    loginPassword.type = "text";
});

small2.addEventListener("click", function () {
    small2.style.display = "none";
    small1.style.display = "block";
    loginPassword.type = "password";
});