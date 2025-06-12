const supabaseClient = supabase.createClient('https://crzstwvgipcfkfeejwyx.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNyenN0d3ZnaXBjZmtmZWVqd3l4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk3MjI3MTMsImV4cCI6MjA2NTI5ODcxM30.b8H2UtkzmCJ0cD70V4-Ct-8Y2YdWJ2-2Gbr3Y-vueRc')

async function addTodo() {
    console.log("Working!!!");
    let todo = document.getElementById("todo").value
    console.log(todo);
    const { error } = await supabaseClient
        .from('todos')
        .insert({ id: Math.round(Math.random() * 10), todo: todo, completed: false })

    if (error) {
        alert(error.message)
    }
    window.location.reload()
}

async function fetchTodo() {
    const { data, error } = await supabaseClient
        .from('todos')
        .select()

    if (error) {
        return console.log(error.message)
    }

    let container = document.getElementById("container")

    for (let i = 0; i < data.length; i++) {
        const element = data[i];
        container.innerHTML += `
        <div style="display : flex; align-items: center; gap : 20px; background-color: rgba(0,0,0,0.2); margin-bottom: 20px;">
            <h1>${element.todo}</h1>
            <p>${element.id}</p>
            <p>${element.completed}</p>
            <button onclick="updateTodo(${element.id})">Update</button>
            <button onclick="deleteTodo(${element.id})">Delete</button>
        </div>`
    }
    console.log(data);
}

fetchTodo()

async function updateTodo(id) {
    console.log(id);

    let todo = prompt("Enter your updated todo")
    let completed = prompt("true or false")
    console.log(todo);
    console.log(completed);

    const { error } = await supabaseClient
        .from('todos')
        .update({ todo, completed })
        .eq('id', id)
    window.location.reload()
}

async function deleteTodo(id) {
    const response = await supabaseClient
        .from('todos')
        .delete()
        .eq('id', id)


    console.log(response);
    window.location.reload()
}