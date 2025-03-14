const menubtn = document.querySelector("#menuopen")
const sideber = document.querySelector("#sideber")
const sideberClose = document.querySelector("#sideberClose")
menubtn.addEventListener("click", () => {
    sideber.style.right = "0"
})
sideberClose.addEventListener("click", () => {
    sideber.style.right = "-105%"
})
// ================ loader =================
function webLoader() {
    const loader = document.querySelector('.loader-content');
    const mainDiv = document.querySelector('#main');
    setTimeout(() => {
      loader.style.display = 'none';
      mainDiv.style.display = 'block';
    }, 5000);
  }
  webLoader();