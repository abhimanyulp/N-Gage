
const baseServerURL = "https://clean-erin-dog.cyclic.app"

let userAuthToken = localStorage.getItem("localAccessToken") || null;
let lsEmail = localStorage.getItem("email")

let homeLogo = document.getElementById("home")
let loginEl = document.getElementById("login")
let logoutEl = document.getElementById("logout")
let logoutBtn = document.getElementById("logout-btn");
let updateSwitch = document.getElementById("update-switch");

let freeEl = document.getElementById("free");
let basicEl = document.getElementById("basic");
let growthEl = document.getElementById("growth");
let proEl = document.getElementById("pro");

fetching()


// <-------------Event Listerners--------------->


updateSwitch.addEventListener("change", () => {
    localStorage.setItem("plan", updateSwitch.value)
    window.location.href = "/checkout.html"
})

homeLogo.addEventListener("click", () => {
    window.location.href = "/index.html"
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
    window.location.href = "/index.html"
})


// <--------------Functions-------------------->


function fetching() {

    fetch(`${baseServerURL}/users/${lsEmail}`, {
        method: "GET",
        headers: {
            'Content-type': 'application/json',
            "Authorization": `Bearer ${userAuthToken}`
        }
    })
        .then(res => res.json())
        .then(data => {
            if (data.plan == "free") {
                freeEl.style.display = "block"
            } else if (data.plan == "basic") {
                basicEl.style.display = "block"
            } else if (data.plan == "growth") {
                growthEl.style.display = "block"
            } else if (data.plan == "pro") {
                proEl.style.display = "block"
            }

        })
        .catch(err => {
            console.log(err)
        })
}