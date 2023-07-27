
const baseServerURL = "https://n-gage.onrender.com"

let userAuthToken = localStorage.getItem("localAccessToken") || null;
let lsEmail = localStorage.getItem("email")

let updateSwitch = document.getElementById("update-switch");

let freeEl = document.getElementById("free");
let basicEl = document.getElementById("basic");
let growthEl = document.getElementById("growth");
let proEl = document.getElementById("pro");

fetching()

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