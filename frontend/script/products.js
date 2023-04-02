let homeLogo = document.getElementById("home")
let signupBtn = document.getElementById("signup-btn")
let loginBtn = document.getElementById("login-btn")

let lsEmail = localStorage.getItem("email")
let loginEl = document.getElementById("login")
let logoutEl = document.getElementById("logout")
let logoutBtn = document.getElementById("logout-btn");

let myplanBtn = document.getElementById("myplan-btn");

let freeBtn = document.getElementById("free-btn");
let basicBtn = document.getElementById("basic-btn");
let growthBtn = document.getElementById("growth-btn");
let proBtn = document.getElementById("pro-btn");



// <-------------Event Listerners--------------->


myplanBtn.addEventListener("click", () => {
    window.location.href = "/myplan.html"
})

homeLogo.addEventListener("click", () => {
    window.location.href = "/index.html"
})

signupBtn.addEventListener("click", () => {
    window.location.href = "/signup.html"
})

loginBtn.addEventListener("click", () => {
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






freeBtn.addEventListener("click", () => {
    if (lsEmail) {
        alert("Cannot Buy Free Plan")
    } else {
        alert("Please Login First")
    }
})

basicBtn.addEventListener("click", () => {
    if (lsEmail) {
        localStorage.setItem("plan", "basic")
        window.location.href = "/checkout.html"
    } else {
        alert("Please Login First")
    }

})

growthBtn.addEventListener("click", () => {
    if (lsEmail) {
        localStorage.setItem("plan", "growth")
        window.location.href = "/checkout.html"
    } else {
        alert("Please Login First")
    }

})

proBtn.addEventListener("click", () => {
    if (lsEmail) {
        localStorage.setItem("plan", "pro")
        window.location.href = "/checkout.html"
    } else {
        alert("Please Login First")
    }

})