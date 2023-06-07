let arrayAcc = JSON.parse(localStorage.getItem('listUser')) || [];
let arrShop = JSON.parse(localStorage.getItem('adminProducts')) || [];
let arrCart = JSON.parse(localStorage.getItem("CartUser")) || [];
let detailCart = JSON.parse(localStorage.getItem("DetailCart")) || [];
let historyShopMyUser = JSON.parse(localStorage.getItem('HistoryShop')) || [];

let thongbao = document.querySelector(".thongbao");

function shopRenderProduct() {
  let listShopProduct = "";
  for (let i = 0; i < arrShop.length; i++) {
    listShopProduct += `
    <div class="main-shop-product">
        <div><img src="${arrShop[i].imgSrc}" alt=""></div>
        <div class="shop-line"></div>
        <small>${arrShop[i].name}</small>
        <div class="Category">${arrShop[i].Caegory}</div>
        <div style="display:none;">${arrShop[i].Details}</div>
        <div class="shop-price">${arrShop[i].Price} USD</div>
        <div class="shop-content-product">
        <span onclick="detailShop(${i})">Xem chi tiết</span><span onclick="addCartShop(${i})">Mua</span>
        </div>
    </div>
    </div>
    `;
  }
  document.querySelector(".main-shop-container").innerHTML = listShopProduct;
}
shopRenderProduct();

for (let i = 0; i < arrayAcc.length; i++) {
  if (arrayAcc[i].check == "online") {
    let nameLogin = `${arrayAcc[i].name}`;
    document.querySelector(".nameUser").innerHTML = nameLogin;
    function catUserName() {
      location.href = "../HTML/cartUser.html";
    }
    function logUot() {
      arrayAcc[i].check = "offline";
      arrCart = [];
      localStorage.setItem('CartUser', JSON.stringify(arrCart));
      localStorage.setItem('listUser', JSON.stringify(arrayAcc));
      for (let a = 0; a < historyShopMyUser.length; a++) {
        if (historyShopMyUser[a].Name == arrayAcc[i].name) {
          historyShopMyUser[a].Status = "offline"
          localStorage.setItem('HistoryShop', JSON.stringify(historyShopMyUser));

        }
      }
      location.href = "../HTML/homepage.html";
    }
    function addCartShop(id) {
      swal({
        title: "Đã Mua!",
        text: " ",
        icon: "success",
        timer: 1000,
        buttons: false
      });
      let found = false;
      for (let j = 0; j < arrCart.length; j++) {
        if (arrShop[id].Caegory == arrCart[j].Caegory) {
          arrCart[j].quantity += 1;
          found = true;
          break;
        }
      }
      if (!found) {
        arrShop[id].quantity = 1;
        arrCart.push(arrShop[id]);
      }
      localStorage.setItem('CartUser', JSON.stringify(arrCart));
      thongbao.style.display = "block"
    }
    function detailShop(id) {
      if (detailCart.length == 0) {
        detailCart.push(arrShop[id]);
      } else {
        detailCart = [];
        detailCart.push(arrShop[id]);
        localStorage.setItem("DetailCart", JSON.stringify(detailCart));
      }
      localStorage.setItem("DetailCart", JSON.stringify(detailCart));
      location.href = "../HTML/detail.html";
    }
    function catUserhahh() {
      location.href = "../HTML/historyUser.html";
    }
    break;
  } else if (arrayAcc[i].check == "offline" && i == arrayAcc.length - 1) {
   
    location.href = "../HTML/homepage.html";
  }
}
