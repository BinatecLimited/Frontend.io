const menubtn = document.getElementsByClassName("my-menu");
const popup = document.getElementsByClassName("my-popup");

menubtn.addEventListener("click", showPopup);

function showPopup() {
    popup.classList.toggle("show-popup")
}
