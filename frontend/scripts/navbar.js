let lsEmail = localStorage.getItem("email")

let loginEl = document.getElementById("login")
let logoutEl = document.getElementById("logout")
let logoutBtn = document.getElementById("logout-btn");

//Expand Menu
let loginBtnExpand = document.getElementById("login-btn-expand")
let signupBtnExpand = document.getElementById("signup-btn-expand")
let logoutBtnExpand = document.getElementById("logout-btn-expand")
let myplanBtnExpand = document.getElementById("myplan-btn-expand")



window.addEventListener("load", (e) => {

    if (lsEmail) {
        loginEl.style.display = "none";
        logoutEl.style.display = "flex";

        loginBtnExpand.style.display = "none";
        signupBtnExpand.style.display = "none";
        logoutBtnExpand.style.display = "block";
        myplanBtnExpand.style.display = "block";
    }
})


logoutBtn.addEventListener("click", (e) => {
    localStorage.setItem("email", "")
    localStorage.setItem("localAccessToken", "")
    location.reload()
})

logoutBtnExpand.addEventListener("click", (e) => {
    localStorage.setItem("email", "")
    localStorage.setItem("localAccessToken", "")
    location.reload()
})

function myFunction() {
    var expand = document.getElementById("expand");
    var hamburger = document.getElementById("hamburger")
    if (expand.style.display == "block") {
        expand.style.display = "none";
        hamburger.style.backgroundColor = "whitesmoke"
        hamburger.style.color = "black"
    } else {
        expand.style.display = "block";
        hamburger.style.backgroundColor = "black"
        hamburger.style.color = "white"
    }
}

window.addEventListener("resize", function (event) {
    if (document.body.clientWidth >= 801) {
        expand.style.display = "none"
        hamburger.style.backgroundColor = "whitesmoke"
        hamburger.style.color = "black"
    }
})