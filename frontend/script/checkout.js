
const baseServerURL = "https://calm-pink-turtle-suit.cyclic.app"

//Local storage
let userAuthToken = localStorage.getItem("localAccessToken") || null;
let lsData = localStorage.getItem("email")

let homeLogo = document.getElementById("home")
let signupBtn = document.getElementById("signup-btn")
let loginBtn = document.getElementById("login-btn")

let lsEmail = localStorage.getItem("email")
let loginEl = document.getElementById("login")
let logoutEl = document.getElementById("logout")
let logoutBtn = document.getElementById("logout-btn");

let otpEl = document.getElementById("otp-box");
let otpBtn = document.getElementById("input-btn");

let otp1 = document.getElementById("otp-1");
let otp2 = document.getElementById("otp-2");
let otp3 = document.getElementById("otp-3");
let otp4 = document.getElementById("otp-4");

let currentOtp;

let cardIn = document.getElementById("cardIn");
let cardNameIn = document.getElementById("nameIn");
let cardDateIn = document.getElementById("expiryIn");
let cvvIn = document.getElementById("cvvIn");

let OrderBtn = document.getElementById("submitBtn")

let basicEl = document.getElementById("basic");
let growthEl = document.getElementById("growth");
let proEl = document.getElementById("pro");

let plan_checkout = localStorage.getItem("plan")

let emailEl = document.getElementById("email-display");
let myplanBtn = document.getElementById("myplan-btn");



// <-------------Event Listerners--------------->



homeLogo.addEventListener("click", () => {
    window.location.href = "/index.html"
})

signupBtn.addEventListener("click", () => {
    window.location.href = "/signup.html"
})

loginBtn.addEventListener("click", () => {
    window.location.href = "/login.html"
})

myplanBtn.addEventListener("click",()=>{
    window.location.href = "/myplan.html"
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





if (plan_checkout == "basic") {
    basicEl.style.display = "block"
} else if (plan_checkout == "growth") {
    growthEl.style.display = "block"
} else if (plan_checkout == "pro") {
    proEl.style.display = "block"
}

emailEl.innerText = lsEmail






//OTP button addEventListener
otpBtn.addEventListener("click", () => {

    let otpIn = otp1.value + otp2.value + otp3.value + otp4.value

    if (otpIn == currentOtp) {

        otpEl.style.display = "none"

        backend()

        setTimeout(() => {
            window.location.href = "index.html"
        }, 4000)

        alert("Plan Activated Successfuly");

    } else {
        alert("Please Enter Correct OTP")
    }

})


//Place Order button addEventListener
OrderBtn.addEventListener("click", (e) => {

    e.preventDefault()

    if (validate()) {

        currentOtp = GenerateOTP();
        alert(`New message: Your OTP for order is ${currentOtp}`)
        otpEl.style.display = "flex"

    }
    else {
        alert("Please fill the all cards fields")
    }


})



// <--------------Functions-------------------->


//OTP Generate function
function GenerateOTP() {
    var otp = []

    var digit1 = Math.floor(Math.random() * 9)
    var digit2 = Math.floor(Math.random() * 9)
    var digit3 = Math.floor(Math.random() * 9)
    var digit4 = Math.floor(Math.random() * 9)

    otp.push(digit1, digit2, digit3, digit4)

    return otp.join("")
}




//Validating input fields are empty or not
function validate() {
    if (cardIn.value == "" || cardNameIn.value == "" || cardDateIn.value == "" || cvvIn.value == "") {
        return false;
    } else {
        return true;
    }
}




//Backend POST function
function backend() {

    let currPlan = localStorage.getItem("plan")

    let userObj = {
        plan: currPlan,
    }

    fetch(`${baseServerURL}/users/update/${lsData}`, {
        method: "PATCH",
        body: JSON.stringify(userObj),
        headers: {
            'Content-type': 'application/json',
            "Authorization": `Bearer ${userAuthToken}`
        }
    })
        .then(res => res.json())
        .then(data => {
            console.log(data.msg);
        })
        .catch(err => {
            console.log(err)
        })

}