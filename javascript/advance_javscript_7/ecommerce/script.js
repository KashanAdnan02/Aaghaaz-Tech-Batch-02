const token = localStorage.getItem("sb-ytctdywpwitxxbcqrimh-auth-token")

if (token) {
    console.log("working");
    document.getElementById("buttons").innerHTML = `<div class="profile"><div class="profile-icon">${localStorage.getItem("username").charAt(0)} </div><i class="fa-solid fa-cart-shopping"></i> <button onclick="logout()">Logout</button></div>`
} else {
    console.log("User is logout")
}

function logout() {
    localStorage.removeItem("sb-ytctdywpwitxxbcqrimh-auth-token")
    window.location.reload()
}