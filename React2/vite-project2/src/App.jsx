import "./App.css";
import Product from "./Product";

function App() {
  return (
    <div className="container">
      <Product
        title="Book"
        description="A book that is fun to read"
        oldPrice={499}
        newPrice={399}
      />

      <Product
        title="Mobile Phone"
        description="A phone that is fun to use"
        oldPrice={25000}
        newPrice={21999}
      />

      <Product
        title="Laptop"
        description="A laptop that is fun to use"
        oldPrice={65000}
        newPrice={59999}
      />
    </div>
  );
}


export default App
