const supabaseClient = supabase.createClient('https://ibvuiynvtvksgiyznbno.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlidnVpeW52dHZrc2dpeXpuYm5vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgzNDIyMjMsImV4cCI6MjA2MzkxODIyM30.5spXNIn7Ykt3bpzJdkfSB_5xJ5DxJE-KY_NY-Q0v-Mo')


let form = document.getElementById("form")

form.addEventListener("submit", async function (event) {
    event.preventDefault()
    let name = document.getElementById("name").value;
    let description = document.getElementById("description").value;
    let image = document.getElementById("image").value;
    let price2 = document.getElementById("price").value;

    console.log("Submit Form")
    const { error } = await supabaseClient
        .from('product')
        .insert({ id: Math.round(Math.random()) * 20, name: name, description: description, image: image, price: price2 })

    if (error) {
        console.log(error)
    } else {
        fetchProducts()
        alert("Insert Successfull")
    }
})


async function fetchProducts() {
    let data_container = document.getElementById("data-container")
    const { data, error } = await supabaseClient
        .from('product')
        .select()

    if (data) {
        for (let i = 0; i < data.length; i++) {
            const element = data[i];
            console.log(element);

            data_container.innerHTML += `
            <div>
                <img src="${element.image}" width="310" />
                <h1>${element.name}</h1>
                <p>${element.description}</p>
                <h2>${element.price}</h2>
                <button onclick="deleteBtn(${element.id})" class="btn-del">Delete</button>
                <button onclick="updateBtn(${element.id})" class="btn-update">Update</button>
            </div>
`

        }

    } else {
        console.log(error);
    }
}

fetchProducts()

async function deleteBtn(id) {
    console.log("Button Pressed");
    console.log(id);
    const response = await supabaseClient
        .from('product')
        .delete()
        .eq('id', id)

    if (response) {
        alert(`Deleted Successfully The Product With the ID of ${id}`)
        fetchProducts()
    }
}

async function updateBtn(id) {
    console.log(id);
    let name = prompt("Enter the updated name")
    let description = prompt("Enter the updated description")
    let price = prompt("Enter the updated price")
    let image = prompt("Enter the updated image")

    const { error } = await supabaseClient
        .from('product')
        .update({ name: name, description: description, image: image, price: price })
        .eq('id', id)

    if (!error) {
        alert("Update Successfylly")
        fetchProducts()
    } else {
        console.log(error);
    }
}