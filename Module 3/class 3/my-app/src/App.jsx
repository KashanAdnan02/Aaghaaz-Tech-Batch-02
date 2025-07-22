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
import Button from "./components/Button"
function App() {
  // function handleClick() {
  //   console.log("Hello")
  // }
  // function handleSubmit() {
  //   console.log("1234")
  // }

  return (
    <div>
      <h1>App</h1>
      {/* <Sum a={10} b={5} /> */}
      {/* <button onClick={handleClick}>Click</button> */}


      <Button func={handleClick} />
      <Button func={handleSubmit} />
    </div>
  )
}

export default App