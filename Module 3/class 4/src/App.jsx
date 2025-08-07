// // import Mycomponent from "./components/Mycomponent"
// import "./App.css"
// import Card from "./components/cards/Card"




// import Sum from "./components/Sum"



// function App() {
//   return (
//     <div className="main">
//       <Card heading="TWITTER" image="https://images.seeklogo.com/logo-png/31/1/twitter-logo-png_seeklogo-318424.png"
//         description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ex nobis consectetur adipisci, rem vero itaque commodi  repudiandae illum animi, iusto corrupti neque reprehenderit nihil asperiores accusantium. Voluptates, recusandae impedit!" />
//       <Card color="pink" heading="INSTAGRAM" image="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
//         description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ex nobis consectetur adipisci, rem vero itaque commodi  repudiandae illum animi, iusto corrupti neque reprehenderit nihil asperiores accusantium. Voluptates, recusandae impedit!" />
//       <Card heading="YOUTUBE" image="https://images.seeklogo.com/logo-png/31/1/twitter-logo-png_seeklogo-318424.png"
//         description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ex nobis consectetur adipisci, rem vero itaque commodi  repudiandae illum animi, iusto corrupti neque reprehenderit nihil asperiores accusantium. Voluptates, recusandae impedit!" />
//     </div>
//   )
// }

// export default App


// function Btn() {
//   return <button>Hello</button>
// }

// import Welcome from "./components/Welcome"
// function App() {
//   return (
//     <div>
//       <h1>Hello</h1>
//       <Welcome name="Kashan" />
//       <Welcome name="Azzan" />
//       <Welcome name="Fahad" />
//       <Btn />
//     </div>
//   )
// }

// export default App
// import Button from "./components/Button"
// function App() {
// function handleClick() {
//   console.log("Hello")
// }
// function handleSubmit() {
//   console.log("1234")
// }

//   return (
//     <div>
//       <h1>App</h1>
//       {/* <Sum a={10} b={5} /> */}
//       {/* <button onClick={handleClick}>Click</button> */}


//       <Button func={handleClick} />
//       <Button func={handleSubmit} />
//     </div>
//   )
// }

// export default App

import { useState } from "react"

function App() {
  // let [count, setCount] = useState(0)
  let [car , setCar] = useState({
    brand : "Toyota",
    model : "Civic",
    year : 2025,
    color : "white"
  })
  console.log(car);
  
  // console.log(count)
  // let count = 0
  // function handleChange() {
  //   count = 1
  //   console.log(count)

  // console.log(count)
  function handleChange() {
    setCar({
      brand : "Suziki",
      model : "Alto",
      year : 2011,
      color : "grey"
    })
  }
  return (
    <div>
      {/* <button onClick={() => setCount(--count)}>-</button>
      <h1>{count}</h1>
      <button onClick={() => setCount(++count)}>+</button> */}

        <p>{car.brand}</p>
        <p>{car.year}</p>
        <p>{car.model}</p>
        <p>{car.color}</p>


        <button onClick={handleChange}>Change Car</button>
    </div>
  )
}


export default App