let homeLogo = document.getElementById("home")
let signupBtn = document.getElementById("signup-btn")
let loginBtn = document.getElementById("login-btn")

let lsEmail = localStorage.getItem("email")
let loginEl = document.getElementById("login")
let logoutEl = document.getElementById("logout")
let logoutBtn = document.getElementById("logout-btn");

let myplanBtn = document.getElementById("myplan-btn");


// <-------------Event Listerners--------------->


homeLogo.addEventListener("click", () => {
    window.location.href = "/index.html"
})

myplanBtn.addEventListener("click",()=>{
    window.location.href = "/myplan.html"
})

signupBtn.addEventListener("click",()=>{
    window.location.href = "/signup.html"
})

loginBtn.addEventListener("click",()=>{
    window.location.href = "/login.html"
})


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