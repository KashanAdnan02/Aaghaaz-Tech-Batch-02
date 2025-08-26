// import { useEffect, useState } from "react"
// import axios from "axios"
// import Card from "./components/Card"

// function App() {
//   let [todos, setTodos] = useState([
//     {
//       title: "Loading.............."
//     },
//   ])
//   useEffect(() => {
//     axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
//       console.log(res);
//       setTodos(res.data)
//     }).catch((err) => {
//       console.log(err);
//     })
//   }, [])

//   return (
//     <div style={{ display: "flex", flexWrap: 'wrap' }}>

//       {
//         todos.map((item, index) => {
//           return (
//             <Card item={item} />
//           )
//         })
//       }

//     </div>
//   )
// }


// export default App
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./App.css"
import { faHouse } from "@fortawesome/free-regular-svg-icons"

function App() {
  return (
    <div className="home">
      <FontAwesomeIcon icon={faHouse} />
      <h1>hello</h1>
    </div>
  )
}

export default App