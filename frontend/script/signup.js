const baseServerURL = "https://n-gage.onrender.com"

let nameIn = document.getElementById("nameIn")
let emailIn = document.getElementById("emailIn")
let passIn = document.getElementById("passIn")
let numIn = document.getElementById("numIn")
let webIn = document.getElementById("webIn")
let submitBtn = document.getElementById("submitBtn")

let homeLogo = document.getElementById("home")
let loginBtn = document.getElementById("login-btn")


// <-------------Event Listerners--------------->

homeLogo.addEventListener("click", () => {
    window.location.href = "/index.html"
})

loginBtn.addEventListener("click", () => {
    window.location.href = "/login.html"
})


submitBtn.addEventListener("click", (e) => {

    e.preventDefault();

    let userObj = {
        name: nameIn.value,
        email: emailIn.value,
        pass: passIn.value,
        mobile: numIn.value,
        website: webIn.value,
        plan: "free"
    }

    if (validate(userObj)) {

        fetch(`${baseServerURL}/users/register`, {
            method: "POST",
            body: JSON.stringify(userObj),
            headers: {
                'Content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                alert(data.msg);
            })
            .catch(err => {
                console.log(err)
            })

    }
})


// <--------------Functions-------------------->

function validate(obj) {

    if (obj.name == "" || obj.email == "" || obj.pass == "" || obj.mobile == "" || obj.website == "") {
        alert("Please Fill The Form")
        return false;
    } else {
        return true;
    }
}
