import { useEffect, useState } from "react"


function App() {

  const [ produts, setProducts] = useState([
    {name: 'product1', price: 100.00},
    {name: 'product2', price: 100.00},
  ])

  useEffect(() => {

    fetch('http://localhost:5678/api/Products')
    .then(response => response.json())
    .then(data => setProducts(data))

  }, [])


  function addProduct() {
      setProducts(prevState => [...prevState, {name: 'product'+ (prevState.length+1), price: (prevState.length) * 100}])
  }




  return (
    <div className="root">
        <h1>Re-Store</h1>

        <div>
          <ul>
            {
              produts.map((product, i) => (
                <li key={i.toString()}>{product.name} - {product.price}</li>
              ))
              }
          </ul>

          <button type="button" onClick={addProduct}>Add Product</button>
        </div>
    </div>
  )
}

export default App
