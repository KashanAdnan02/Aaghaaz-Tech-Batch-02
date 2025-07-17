import Mycomponent from "./components/Mycomponent"

import "./App.css"

function App() {
  let num1 = 99
  let num2 = 92
  console.log(num1 * num2)
  return (
    <div>
      <div></div>
      <div>{num1 + num2}</div>
      <Mycomponent /> 
    </div>
  )
}

export default App