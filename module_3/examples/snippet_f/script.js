
let dalert_btn = document.getElementById('dalert-btn');
dalert_btn.onclick = function () {
    alert(this.dataset.msg);
}

let data_btn = document.getElementById('data-btn');
data_btn.onclick = function () {
    let message = prompt('Welk bericht wilt u aan CSS doorgeven?');
    dalert_btn.dataset.msg = message;
}