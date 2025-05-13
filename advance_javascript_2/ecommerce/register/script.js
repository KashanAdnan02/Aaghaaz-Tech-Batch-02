const supabaseClient = supabase.createClient('https://nmqyrkrbpurrrfiksqjg.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5tcXlya3JicHVycnJmaWtzcWpnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcxMzcyNDQsImV4cCI6MjA2MjcxMzI0NH0.5IBlvq-gGN3SFTVB3c66Lg9FqYgnvO2VA1dqPhGPvm8')


document.getElementById("register").addEventListener("submit", async function (event) {
    event.preventDefault()


    let username = document.getElementById("username").value
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    console.log(username);
    console.log(email);
    console.log(password);

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

