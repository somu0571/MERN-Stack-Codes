import "./App.css"
import Title from "./Title.jsx"  // Import the Title component
import Product from "./Product.jsx"
import ProductTab from "./ProductTab.jsx"
import Act from "./Act.jsx"

// Creating Components in React


function Description() {
  return <p>I am the description</p>
}


function App() {
  let name = "Mack";
  return (
    <div className="mainBox">  {/*<> </> used putting components in divs without actually using <div> tag also known as React Fragment*/}
      {/* Creating Component Title inside Component App & exporting it */}
      <Title />
      <Description />
      <p>2 * 2 = {2 * 2} {/* used curly brackets to put code inside JSX & will work as JS*/}</p>
      <p>Hi, {name.toUpperCase()}!</p>
      <ProductTab />
      <Act />
    </div>
  )
}

export default App
