// const supabaseClient = supabase.createClient('https://nmqyrkrbpurrrfiksqjg.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5tcXlya3JicHVycnJmaWtzcWpnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcxMzcyNDQsImV4cCI6MjA2MjcxMzI0NH0.5IBlvq-gGN3SFTVB3c66Lg9FqYgnvO2VA1dqPhGPvm8')
const supabaseClient = supabase.createClient('https://sfxrqgloickgaiksxpnr.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNmeHJxZ2xvaWNrZ2Fpa3N4cG5yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcxNDcwMDksImV4cCI6MjA2MjcyMzAwOX0.c0luIHJmvJX035RXJXWnFXffL2YkP8iNhbgiNvCI9XQ')


document.getElementById("register").addEventListener("submit", async function (event) {
    event.preventDefault()
    let username = document.getElementById("username").value
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    console.log(username);
    console.log(email);

    const { data, error } = await supabaseClient.auth.signUp({
        email: email,
        password: password,
    })
    if (error) {
        alert(error.message)
    } else {
        alert("Signup Scces")
        console.log(data);

    }

})





