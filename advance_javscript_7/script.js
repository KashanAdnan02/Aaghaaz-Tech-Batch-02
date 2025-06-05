const supabaseClient = supabase.createClient('https://ibvuiynvtvksgiyznbno.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlidnVpeW52dHZrc2dpeXpuYm5vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgzNDIyMjMsImV4cCI6MjA2MzkxODIyM30.5spXNIn7Ykt3bpzJdkfSB_5xJ5DxJE-KY_NY-Q0v-Mo')

async function submit() {
    const image = document.getElementById("image").files[0]

    const { data, error } = await supabaseClient
        .storage
        .from('files-image')
        .upload('avatar1.png', image, {
            cacheControl: '3600',
            upsert: false
        })  
    console.log(data);
    console.log(error);

}