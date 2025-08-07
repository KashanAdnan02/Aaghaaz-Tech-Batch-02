import { useEffect, useState } from "react"
import Component from "./Component"

import axios from "axios"

function App() {
  const [data, setData] = useState({})

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos/1").then((res) => {
      setData(res.data)
    }).catch((err) => {
      console.log(err)
    })
  }, [])

  console.log(data.title);


  return (
    <div>
      {data?.id}
      {data?.title} <br />
      {data?.userId}
      {data?.completed}
    </div>
  )
}

export default App






// let obj = {
//   name: "Kashan",
//   email: "asdasd"
// }
// destructure
// const { name, email } = obj

// console.log(obj.name)
// DidMount

// const name = "Kashan Adnan  "
// let [count, setCount] = useState(0)

// useEffect(() => {

// }, [])
// const handleChange = () => {
//   setCount(++count)
// }