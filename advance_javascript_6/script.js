// const form = document.getElementById("form-container")

// const supabaseClient = supabase.createClient('https://ibvuiynvtvksgiyznbno.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlidnVpeW52dHZrc2dpeXpuYm5vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgzNDIyMjMsImV4cCI6MjA2MzkxODIyM30.5spXNIn7Ykt3bpzJdkfSB_5xJ5DxJE-KY_NY-Q0v-Mo')

// form.addEventListener("submit", async (event) => {
//     event.preventDefault()
//     console.log("hello");
//     // const { data, error } = await supabaseClient
//     //     .storage
//     //     .createBucket('files', {
//     //         public: true,
//     //         allowedMimeTypes: ['image/png', 'image/jpg'],
//     //         fileSizeLimit: 1024
//     //     })
//     let image = document.getElementById("image")
//     console.log(image.files[0]);

//     const avatarFile = image.files[0]
//     const { data, error } = await supabaseClient
//         .storage
//         .from('kharidofatafatproductimages')
//         .upload(`product    /${Math.random(100) + image.files[0].name}`, avatarFile, {
//             cacheControl: '3600',
//             upsert: false
//         })

//     if (!error) {
//         console.log("Success", data);

//     } else {
//         console.log(error);

//     }
// })


// async function fetchData() {
//     const { data, error } = await supabaseClient
//         .from('product')
//         .select("*")

//     console.log(data)
// }

// fetchData()

// let a = 0
// a = "9"
// console.log(a);
// let obj = {}

// obj.fullname = function () {
//     console.log("hello");
// }

// console.log(obj.fullname());
a = 0
alert(a)

// var a = 0


var x = 5;
var y;
alert(y);
y = 7;