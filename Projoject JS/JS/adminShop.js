    let detail = document.querySelector(".detail");
    let detailProduct = document.querySelector(".detail-product");
    let arrAdminProduct = [];
    detail.addEventListener("click", function () {
        detailProduct.style.display = "block";
    });

    detailProduct.addEventListener("click", function () {
        detailProduct.style.display = "none";
    });

    let newImg = document.getElementById("new-img");
    let newProduct = document.getElementById("new-product");
    let newCaegory = document.getElementById("new-category");
    let newDetail = document.getElementById("new-detail");
    let admiButton = document.querySelector(".admin-button");
    let newPrice = document.getElementById("new-price");

    admiButton.addEventListener("click", function () {
        let newImgs = newImg.value;
        let newProducts = newProduct.value;
        let newCaegorys = newCaegory.value;
        let newDetails = newDetail.value;
        let newPriceS = newPrice.value
        let listProduct = {
            imgSrc: newImgs,
            name: newProducts,
            Caegory: newCaegorys,
            Detaails: newDetails,
            Price: newPriceS
        };
        arrAdminProduct.unshift(listProduct);
        localStorage.setItem("adminProducts", JSON.stringify(arrAdminProduct));
        resetForm(); 
        rederProduct();
    });

    function rederProduct() {
        let result = "";
        for (let i = 0; i < arrAdminProduct.length; i++) {
            result += `
            
                <div class="main-content-4" id="main-content-4")>
                    <div class="main-content-4-product">
                    <div class="sothutu">${i+1}</div>
                        <div class="main-content-4-product-1">
                            <img src="${arrAdminProduct[i].imgSrc}" alt="">
                        </div>
                        <div class="main-content-4-product-2">
                            <div class="main-content-4-product-3">
                            <div style="color: red;">Giá Sản phẩm: ${arrAdminProduct[i].Price} USD</div>
                            <div class="main-content-4-product-span"><span onclick="editProduct(${i})">Sửa</span><span onclick="del(${i})">Xóa</span></div>
                                <div class="main-content-4-title">${arrAdminProduct[i].name}</div>
                                <div class="main-content-4-title2">${arrAdminProduct[i].Caegory}</div>
                                <u class="detail" onclick="detailProducts(${i})">Xem chi tiết</u>
                            </div>
                        </div>
                    </div>
                    <div class="detail-product">
                    <small onclick="andi(${i})">Ẩn</small>
                    <h2>Thông tin về sản phẩm</h2>
                    <div>
                        <p>thành phần</p>
                        <div>
                        ${arrAdminProduct[i].Detaails}
                        </div>
                    </div>
                </div>
            </div>
        </div>
            `;
        }
        document.getElementById("redersp").innerHTML = result;
    }

    function resetForm() {
        document.getElementById("new-img").value = "";
        document.getElementById("new-product").value = "";
        document.getElementById("new-category").value = "";
        document.getElementById("new-detail").value = "";
        document.getElementById("new-price").value = "";
    }

    // Lấy dữ liệu từ localStorage khi trang web được tải lại
    window.addEventListener("load", function () {
        let storedProducts = localStorage.getItem("adminProducts");
        if (storedProducts) {
            arrAdminProduct = JSON.parse(storedProducts);
            rederProduct();
        }
    });

    let addDetai = document.getElementsByClassName("detail-product")
    function detailProducts(id) {
        console.log(addDetai[id + 1]);
        addDetai[id + 1].style.display = "block";
    }

    function andi(id) {
        addDetai[id + 1].style.display = "none";
    }

    function del(id) {
        arrAdminProduct.splice(id, 1);
        rederProduct();
        localStorage.setItem("adminProducts", JSON.stringify(arrAdminProduct));
    }

    function editProduct(index) {
        console.log("Sadasd");
        document.getElementById("new-img").value = arrAdminProduct[index].imgSrc;
        console.log(arrAdminProduct[index].imgSrc);
        document.getElementById("new-product").value = arrAdminProduct[index].name;
        document.getElementById("new-category").value = arrAdminProduct[index].Caegory;
        document.getElementById("new-detail").value = arrAdminProduct[index].Detaails;
        document.getElementById("new-price").value = arrAdminProduct[index].Price;
        let updateBtn = document.createElement("button");
        updateBtn.textContent = "Update";
        updateBtn.classList.add("my-Update");

        updateBtn.addEventListener("click", function () {
            let updateImg = document.getElementById("new-img").value;
            let updateName = document.getElementById("new-product").value;
            let updateCategory = document.getElementById("new-category").value;
            let updateDetail = document.getElementById("new-detail").value;
            let updatePrice = document.getElementById("new-price").value;
            let updateProduct={
                imgSrc: updateImg,
                name: updateName,
                Caegory: updateCategory,
                Detaails: updateDetail,
                Price: updatePrice
            }
            arrAdminProduct[index]=updateProduct;
            rederProduct();    
            location.href="http://127.0.0.1:5500/HTML/admin.html"
            localStorage.setItem("adminProducts", JSON.stringify(arrAdminProduct))
        });
        document.querySelector(".admin-button").replaceWith(updateBtn);
    }