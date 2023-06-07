let myHistory=JSON.parse(localStorage.getItem("HistoryShop"));
function rederHistory(){
    let result=`<thead>
    <th>Sản Phẩm </th>
    <th> Tên sản phẩm</th>
    <th>loại sản phẩm</th>
    <th>Số Lượng</th>
    <th>Giá</th>
</thead>`
    for(let i =0;i<myHistory.length;i++){
        if(myHistory[i].Status=="online"){
            let arrHistoryProduct=myHistory[i].myCartHistory;
            for(let j = 0;j<arrHistoryProduct.length;j++){
                 result +=`
                <tr>
                <td class="imgHistory"><img src="${arrHistoryProduct[j].imgSrc}" alt=""></td>
                <td class="name">${arrHistoryProduct[j].name}</td>
                <td class="caegory">${arrHistoryProduct[j].Caegory}</td>
                <td>${arrHistoryProduct[j].quantity}</td>
                <td>${arrHistoryProduct[j].Price*arrHistoryProduct[j].quantity} USD</td>
                </tr>
                `
            }
           
        }
    }
    document.getElementById("table").innerHTML=result;

}
rederHistory()
function trolaiShop(){
    location.href = "../HTML/shop.html";

}
function deleteAll(){
    for(let i =0;i<myHistory.length;i++){
        if(myHistory[i].Status=="online"){

            myHistory.splice(i,1)
        }
    }
    localStorage.setItem("HistoryShop",JSON.stringify(myHistory))
    rederHistory()
}