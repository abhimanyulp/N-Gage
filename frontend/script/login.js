const baseServerURL = "https://n-gage.onrender.com"

let emailIn = document.getElementById("emailIn")
let passIn = document.getElementById("passIn")
let submitBtn = document.getElementById("submitBtn")

let homeLogo = document.getElementById("home")
let signupBtn = document.getElementById("signup-btn")


// <-------------Event Listerners--------------->

homeLogo.addEventListener("click", () => {
    window.location.href = "/index.html"
})

signupBtn.addEventListener("click", () => {
    window.location.href = "/signup.html"
})



submitBtn.addEventListener("click", (e) => {

    e.preventDefault();

    let userObj = {
        email: emailIn.value,
        pass: passIn.value,
    }

    if (validate(userObj)) {

        fetch(`${baseServerURL}/users/login`, {
            method: "POST",
            body: JSON.stringify(userObj),
            headers: {
                'Content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                
                if (data.email) {
                    localStorage.setItem("email", data.email)
                    localStorage.setItem("localAccessToken", data.token);
                    alert(data.msg)
                    window.location.href = "./index.html"
                } else {
                    alert(data.msg)
                }

            })
            .catch(err => {
                console.log(err)
            })

    }
})


// <--------------Functions-------------------->

function validate(obj) {

    if (obj.email == "" || obj.pass == "") {
        alert("Please Fill The Form")
        return false;
    } else {
        return true;
    }
}
