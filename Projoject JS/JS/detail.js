let detail = JSON.parse(localStorage.getItem('DetailCart')) || [];
let detailCart = JSON.parse(localStorage.getItem("CartUser")) || [];
function rederDetail(){
    console.log("fsfd");
    let result=`
<div class="main-Detail-container">
<div class="detailImg">
    <img src="${detail[0].imgSrc}">
</div>
<div class="main-Detai-content">
    <div class="detail-content-1">
        <h3>${detail[0].name}</h3>
        <div class="detail-content-2">
            <div>${detail[0].Caegory}</div>
            <a href="#chitiet">Xem thêm chi tiết</a>
        </div>
        <div class="detail-content-3">Tham chiếu 107360</div>
        <div class="detail-content-4">Giá ${detail[0].Price } USD</div>
        <div class="detail-content-5">Dung tích 100ml</div>
        <div class="detail-content-6" onclick="addCartD()">Mua</div>
    </div>

</div>
</div>
<div class="main-Detai-content-2">
<div id="chitiet"></div>
<h2 id="chitiet">Thông tin về sản phẩm</h2>
</div>
<div class="detail-text">
<h4 id="chitiet">CHI TIẾT</h4>
<div class="detail-text-1">
    <h3>sản phẩm</h3>
    <p>Khúc ca tôn vinh sự tự do nam tính được thể hiện trong một mùi hương gỗ thơm quyến rũ và kinh điển,
        chứa bên trong thiết kế chai màu xanh đầy bí ẩn.
        Tinh thần quyết đoán của ${detail[0].name} được thể hiện qua dòng    ${detail[0].Caegory} .</p>
</div>
<div class="detail-text-2">
    <h3>thành phần</h3>
    <p> ${detail[0].Detaails}
    </p>
    <div class="detail-text-3">
        <h3>cảm hứng</h3>
        <p>${detail[0].name} là mùi hương của người đàn ông không bị hòa lẫn hay ràng buộc bởi bất cứ luật lệ
            nào. Một người đàn ông với tinh thần quyết đoán, độc lập và tự do trong việc quyết định số mệnh
            của chính mình.</p>
    </div>

</div>
</div>
`
document.getElementById("rederDetail").innerHTML=result;

}
rederDetail()
function veshop(){
    detail=[]
    localStorage.setItem('DetailCart', JSON.stringify(detail));
    location.href = "../HTML/shop.html";
}
function addCartD() {
    swal({
        title: "Đã Mua!",
        text: " ",
        icon: "success",
        timer: 1000,
        buttons: false
      });
    let found = false;
    for (let j = 0; j < detailCart.length; j++) {
      if (detail[0].Caegory == detailCart[j].Caegory) {
        detailCart[j].quantity += 1;
        found = true;
        break;
      }
    }
    if (!found) {
      detail[0].quantity = 1;
      detailCart.push(detail[0]);
    }
    localStorage.setItem('CartUser', JSON.stringify(detailCart));
  }