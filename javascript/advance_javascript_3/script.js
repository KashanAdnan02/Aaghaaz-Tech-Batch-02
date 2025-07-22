// let email = "kashan@gmail.com"

// localStorage.setItem("email", email)

// document.getElementById("login-form").addEventListener("submit", function (e) {
//     e.preventDefault() // stop refreshing
//     let email = document.getElementById("email").value
//     let username = document.getElementById("username").value
//     console.log(email);
//     console.log(username);
//     localStorage.setItem("email", email)
//     localStorage.setItem("username", username)
//     alert("Login Successfull")
//     window.location.href = "/home.html"
// })



async function apiCalling() {
    const data = await fetch("https://jsonplaceholder.typicode.com/todos")
    const response = await data.json()
    for (let i = 0; i < response.length; i++) {
        const element = response[i];
        const data = document.getElementById("data")
        data.innerHTML += `${(element.title)}${(element.userId)} ${(element.completed)} ${(element.title)}  <br />`;


    }
}

apiCalling()