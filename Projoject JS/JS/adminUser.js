let adminArr = JSON.parse(localStorage.getItem('listUser'));
let mainContent3=document.querySelector(".main-content-3");
let mainContent4=document.querySelector(".main-content-4");
let shopADM=document.getElementById("redersp");
let getInput=document.querySelector(".getInput");
let adminButton=document.querySelector(".admin-button")
function listACC() {
    let user = `
        <thead>
        <th>STT</th>
        <th>TÊN ĐĂNG NHẬP</th>
        <th>MẬT KHẨU</th>
        <th>EMAIL</th>
        <th>STATUS</th>
        <th>CHECK STATUS</th>
        </thead>
 `
        
    for (let i = 0; i < adminArr.length; i++) {
        user += `
        <tr>
        <td>${i+1}</td>
        <td>${adminArr[i].name}</td>
        <td>${adminArr[i].password}</td>
        <td>${adminArr[i].email}</td>
        <td onclick="checkUser(${i})">${adminArr[i].check}</td>
        <td onclick="status(${i})">${adminArr[i].status}</td>
        </tr>
        `
    }
    document.getElementById("table").innerHTML = user;
}
listACC();
function status(id){
    if (adminArr[id].status === "Đang sử dụng") {
        adminArr[id].status = "Khóa";
    } else {
        adminArr[id].status = "Đang sử dụng";};
        saveToLocalStorage();
listACC();
}
function checkUser(id){
    if (adminArr[id].check === "online") {
        adminArr[id].check = "offline";
    } else {
        adminArr[id].check = "online";};
        saveToLocalStorage();
listACC();
}
function saveToLocalStorage() {
    localStorage.setItem('listUser', JSON.stringify(adminArr));
}
function adminLogout(){
    location.href="../../HTML/homepage.html"
}
function renderUer(){
    mainContent3.style.display="block";
    mainContent4.style.display="none";
    shopADM.style.display="none"
    getInput.style.display="none"
    adminButton.style.display="none"
}
function renderAdminShop(){
    mainContent3.style.display="none";
    mainContent4.style.display="none";
    shopADM.style.display="block"
    getInput.style.display="block"
    getInput.style.display="flex"
    adminButton.style.display="block"
    
}



