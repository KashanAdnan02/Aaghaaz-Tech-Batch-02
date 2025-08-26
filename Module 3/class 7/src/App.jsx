import { useEffect, useState } from "react"
import axios from "axios"
import Card from "./components/Card"

function App() {
  let [todos, setTodos] = useState([
    {
      title: "Loading.............."
    },
  ])
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      console.log(res);
      setTodos(res.data)
    }).catch((err) => {
      console.log(err);
    })
  }, [])

  return (
    <div style={{ display: "flex", flexWrap: 'wrap' }}>

      {
        todos.map((item, index) => {
          return (
            <Card item={item} />
          )
        })
      }

    </div>
  )
}


export default App