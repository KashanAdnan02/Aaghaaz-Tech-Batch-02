// const supabaseClient = supabase.createClient('https://nmqyrkrbpurrrfiksqjg.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5tcXlya3JicHVycnJmaWtzcWpnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcxMzcyNDQsImV4cCI6MjA2MjcxMzI0NH0.5IBlvq-gGN3SFTVB3c66Lg9FqYgnvO2VA1dqPhGPvm8')
const supabaseClient = supabase.createClient('https://ytctdywpwitxxbcqrimh.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl0Y3RkeXdwd2l0eHhiY3FyaW1oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkxMjExMjgsImV4cCI6MjA2NDY5NzEyOH0.wnnEf23krCrszEa7mcJntm0tjNcwwNS-jnCAukyM4Kw')

document.getElementById("login").addEventListener("submit", async function (event) {
    event.preventDefault()
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value

    console.log(email);

    const { data, error } = await supabaseClient.auth.signInWithPassword({
        email: email,
        password: password,
    })
    if (error) {
        alert(error.message)
    } else {
        alert("Login Successfull")
        window.location.href = "../index.html"
        console.log(data);

    }

})





