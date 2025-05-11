async function apiCalling() {
    const data = await fetch("https://dummyjson.com/products")
    const products = await data.json()
    console.log(data);
    console.log(products);
    for (let i = 0; i < products.products.length; i++) {
        const element = products.products[i];
        console.log(element);
        let container = document.getElementById("container")
        container.innerHTML += `
            <div class="card">
            <img src="${element.thumbnail}"/>
                <h1>${element.title}</h1>
                <p>${element.description}</p>
                <b>$${element.price}</b>
            </div>
        `

    }
}

apiCalling()



// async function apiCalling() {
//     const data = await fetch('https://jsonplaceholder.typicode.com/todos')
//     const response = await data.json()
//     console.log(response);

//     for (let i = 0; i < response.length; i++) {
//         const element = response[i];
//         let container = document.getElementById("container")
//         container.innerHTML += `
//         <h1>${element.title}</h1>
//         <p>${element.completed}</p>
//         `
//     }

// }

// apiCalling()