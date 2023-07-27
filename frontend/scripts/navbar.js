let lsEmail = localStorage.getItem("email")

let loginEl = document.getElementById("login")
let logoutEl = document.getElementById("logout")
let logoutBtn = document.getElementById("logout-btn");


window.addEventListener("load", (e) => {

    if (lsEmail) {
        loginEl.style.display = "none";
        logoutEl.style.display = "flex";
    }
})


logoutBtn.addEventListener("click", (e) => {
    localStorage.setItem("email", "")
    localStorage.setItem("localAccessToken", "")
    location.reload()
})