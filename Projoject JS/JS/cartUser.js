let arrayAcc = JSON.parse(localStorage.getItem('listUser')) || [];
let myListProduct = JSON.parse(localStorage.getItem("CartUser")) || [];
let historyUser = JSON.parse(localStorage.getItem("HistoryUser")) || [];
let historyShop= JSON.parse(localStorage.getItem("HistoryShop"))||[];
let historyCartMyUser = JSON.parse(localStorage.getItem('HistoryShop')) || [];
let textRender=document.querySelector(".header-input");
let taikhoanvip=document.querySelector(".taikhoanVip");

let UserAccCart = [];

for (let i = 0; i < arrayAcc.length; i++) {

    if (arrayAcc[i].check == "online") {
        function chanelShop() {
            location.href = "../HTML/shop.html";
        }
        let nameLogin = `
        ${arrayAcc[i].name}`
        document.querySelector(".nameUser").innerHTML = nameLogin;
        function logUot() {
            location.href = "../HTML/homepage.html";
            arrayAcc[i].check = "offline"
            UserAccCart = [];
            localStorage.setItem('CartUser', JSON.stringify(UserAccCart));
            localStorage.setItem('listUser', JSON.stringify(arrayAcc));
            for(let a=0;a<history.length;a++){
                if(historyShop[a].Name==arrayAcc[i].name){
                    historyShop[a].Status="offline"
                    localStorage.setItem('HistoryShop', JSON.stringify(historyShop));
        
                }}
        }
        
        function rederMyListProDuct() {
            let result = ` <thead>
            <th>sản phẩm</th>
            <th>tên</th>
            <th>số lượng</th>
            <th>giá tiền</th>
            <th>thành tiền</th>
            <th>Delete</th>
        </thead>`
            for (let i = 0; i < myListProduct.length; i++) {
                result += `
            <tr>
                <td><img src="${myListProduct[i].imgSrc}"></td>
                <td class="name">${myListProduct[i].name}</td>
                <td><i onclick="plusProduct(${i})" class="fa-solid fa-plus" style="color: #141415;"> </i><span>${myListProduct[i].quantity}</span><i onclick="apartForm(${i})" class="fa-solid fa-minus" style="color: #141415;"></i></td>
                <td>${myListProduct[i].Price} USD</td>
                <td>${myListProduct[i].Price * myListProduct[i].quantity} USD</td>
                <td onclick="Del(${i})">Delete</td>
            </tr>
            `
                document.getElementById("tableCart").innerHTML = result;
            }
            
        }
        break;
    } else if (arrayAcc[i].check == "offline" && i == arrayAcc.length - 1) {
        swal({
            title: "Bạn Đã Bị  Khóa Tài Khoản!",
            text: " ",
            icon: "warning",
            timer: 1000,
            buttons: false
          });
          setTimeout(function() {
            location.href = "../HTML/homepage.html";
        }, 1000); 
    }
}
rederMyListProDuct()
function plusProduct(id) {
    myListProduct[id].quantity += 1;
    localStorage.setItem("CartUser", JSON.stringify(myListProduct))
    rederMyListProDuct();
    totalMoney()
}
function apartForm(id) {
    myListProduct[id].quantity -= 1;
    if (myListProduct[id].quantity === 0) {
        myListProduct.splice(id, 1);
        location.href = "../HTML/cartUser.html";

    }
    localStorage.setItem("CartUser", JSON.stringify(myListProduct));
    rederMyListProDuct();
    totalMoney();

}
let a=0;
function totalMoney() {
    let total = 0;
    for (let i = 0; i < myListProduct.length; i++) {
        total += myListProduct[i].Price * myListProduct[i].quantity;
    }
    let rederTotal = "";
    for(let j=0;j<arrayAcc.length;j++){
        if(arrayAcc[j].places=="Vip"&&arrayAcc[j].check=="online"){
            total= total*80/100;
            taikhoanvip.style.display="block";
            textRender.style.display="none"
        }else if(arrayAcc[j].places!="Vip"&&arrayAcc[j].check=="online")
                    taikhoanvip.style.display="none"
                    // textRender.style.display="block"


    }
    rederTotal = ` Tổng Số Tiền là : ${total} USD`;

    myListProduct
    document.querySelector(".total").innerHTML = rederTotal;
     a = total;
    rederMyListProDuct()
}
totalMoney()
function payCart() {
    if (myListProduct.length > 0) {
      let objectHistory = {};
      let objectHistoryShop = {};
  
      for (let i = 0; i < arrayAcc.length; i++) {
        if (arrayAcc[i].check == "online" && myListProduct.length != 0) {
          objectHistory.name = arrayAcc[i].name;
          historyUser.push(objectHistory);
          localStorage.setItem("HistoryUser", JSON.stringify(historyUser));
  
          objectHistoryShop.myCartHistory = myListProduct;
          objectHistoryShop.Status = arrayAcc[i].check;
          objectHistoryShop.Name = arrayAcc[i].name;
          objectHistoryShop.checker = "Đang chuẩn bị hàng";
          historyShop.push(objectHistoryShop);
          historyShop.Status = arrayAcc[i].check;
          localStorage.setItem("HistoryShop", JSON.stringify(historyShop));
  
          if (a > 3000 && arrayAcc[i].places != "Vip") {
            arrayAcc[i].places = "Vip";
            alert("Bạn Đã Trở Thành Vip")
            localStorage.setItem("listUser", JSON.stringify(arrayAcc));
          } else {
            arrayAcc[i].places = "often";
          }
        }
      }
  
      swal({
        title: "Thanh Toán Thành Công",
        text: " ",
        icon: "success",
        timer: 1000,
        buttons: false,
      });
  
      setTimeout(function () {
        myListProduct = [];
        localStorage.setItem("CartUser", JSON.stringify(myListProduct));
        location.href = "../HTML/cartUser.html";
      }, 1000);
    } else {
      swal({
        title: "Không có sản phẩm để thanh toán",
        text: " ",
        icon: "warning",
        timer: 1000,
        buttons: false,
      });
    }
  }
  
  rederMyListProDuct();
function Del(id) {
    myListProduct.splice(id, 1);
    rederMyListProDuct();
    localStorage.setItem("CartUser", JSON.stringify(myListProduct));
    rederMyListProDuct();
    totalMoney()
    swal({
        title: "Đã Xóa",
        text: " ",
        icon: "success",
        timer: 1000,
        buttons: false
      });
      setTimeout(function() {
        location.href = "../HTML/cartUser.html";
      }, 1000); 


}
rederMyListProDuct();



