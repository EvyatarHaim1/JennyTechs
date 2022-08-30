import { useEffect, useState } from 'react';
import Table from './components/Table';
import axios from 'axios';
import DataGrid from './components/DataGrid';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
  }, [])

  const getProducts = async () => {
    try {
      let productsFromDB = await axios.get("http://localhost:4200/")
      setProducts(productsFromDB.data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="App">
      {/* <Table products={products} /> */}
      <DataGrid products={products} />
    </div>
  );
}

export default App;
