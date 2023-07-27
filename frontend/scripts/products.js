
let lsEmail = localStorage.getItem("email")

let myplanBtn = document.getElementById("myplan-btn");

let freeBtn = document.getElementById("free-btn");
let basicBtn = document.getElementById("basic-btn");
let growthBtn = document.getElementById("growth-btn");
let proBtn = document.getElementById("pro-btn");



// <-------------Event Listerners--------------->



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
        window.location.href = "/source/checkout.html"
    } else {
        alert("Please Login First")
    }

})

growthBtn.addEventListener("click", () => {
    if (lsEmail) {
        localStorage.setItem("plan", "growth")
        window.location.href = "/source/checkout.html"
    } else {
        alert("Please Login First")
    }

})

proBtn.addEventListener("click", () => {
    if (lsEmail) {
        localStorage.setItem("plan", "pro")
        window.location.href = "/source/checkout.html"
    } else {
        alert("Please Login First")
    }

})