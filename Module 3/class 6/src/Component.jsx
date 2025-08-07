import { useEffect } from "react"

function Component() {
    useEffect(() => {
        console.log("Hello")

        return () => {
            console.log("Compoenent Closeds")
        }
    })
    return (
        <h1></h1>
    )
}

export default Component