const reloadBtn = document.getElementById("reloadBtn");
reloadBtn.onclick = function(){
    window.location.reload();
}

const delay = 3000;
const submitBtn = document.getElementById("submitBtn");
submitBtn.onclick = function(){
    const checkBox = document.querySelector("#tickbox");
    if (checkBox.checked == false) {
        alert("Hãy đọc điều khoản trước khi xác nhận đăng kí!!!")
    } else
        setTimeout(alert("Đăng kí thành công. Nhấn OK để về trang chủ"), delay);
}

const otherUni = document.getElementById('otherUni');
const listUni = document.getElementById("listUni");
listUni.onclick = () => {
    if (listUni.options[listUni.selectedIndex].text === "Others") {
        otherUni.removeAttribute("disabled");
    }
}
