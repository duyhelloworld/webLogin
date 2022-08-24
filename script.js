var reloadBtn = document.getElementById("reloadBtn");
reloadBtn.onclick = function(){
    window.location.reload();
}

var delay = 3000;
var submitBtn = document.getElementById("submitBtn");
submitBtn.onclick = function(){
    // jQuerry
    const checkBox = document.querySelector("#ticker");
if (checkBox.checked == false) {
    alert("Con tró này, đọc điều khoản 👇👇👇")
} else
    setTimeout(alert("Đăng kí thành công. Nhấn OK để về trang chủ"), delay);
}


