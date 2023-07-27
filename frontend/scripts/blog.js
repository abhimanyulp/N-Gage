const baseServerURL = "https://n-gage.onrender.com"


let userAuthToken = localStorage.getItem("localAccessToken") || null;
let lsEmail = localStorage.getItem("email")

let myplanBtn = document.getElementById("myplan-btn");

let title_add = document.getElementById("title");
let body_add = document.getElementById("post");
let postBtn = document.getElementById("post-submit-btn");
let postEl = document.getElementById("right");


// <-------------Event Listerners--------------->



getallposts()


//Add Post
postBtn.addEventListener("click", (e) => {
    e.preventDefault();

    let postObj = {
        name: lsEmail,
        title: title_add.value,
        body: body_add.value,
    }

    if (lsEmail) {
        fetch(`${baseServerURL}/posts/add`, {
            method: "POST",
            body: JSON.stringify(postObj),
            headers: {
                'Content-type': 'application/json',
                "Authorization": `Bearer ${userAuthToken}`
            }
        })
            .then(res => res.json())
            .then(data => {
                alert(data.msg)
            })
            .catch(err => {
                console.log(err)
            })
    } else {
        alert("Please Login First!")
    }


})


// <--------------Functions-------------------->


function getallposts() {

    fetch(`${baseServerURL}/posts/`, {
        method: "GET",
        headers: {
            'Content-type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(data => {
            Display(data)
        })
        .catch(err => {
            console.log(err)
        })

}


function Display(data) {

    postEl.innerHTML = null;

    data.forEach((element, index) => {


        let post_box = document.createElement("div")
        post_box.setAttribute("class", "post-box")

        let post_title = document.createElement("h1")
        post_title.innerText = element.title;
        post_title.setAttribute("class", "post-title")

        let post_body = document.createElement("h4")
        post_body.innerText = element.body;
        post_body.setAttribute("class", "post-body")

        let post_name = document.createElement("p")
        post_name.innerText = `by: ${element.name}`;
        post_name.setAttribute("class", "post-name")


        post_box.append(post_title, post_body, post_name);
        postEl.append(post_box);
    })

}
