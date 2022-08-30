import { useEffect, useState } from 'react';
import axios from 'axios';
import styled from "styled-components";
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
      <H1>JennyTechs products</H1>
      <DataGrid products={products} />
    </div>
  );
}

export default App;

const H1 = styled.h1`
display: flex;
justify-content: center;
color: purple;
margin-top: 50px; 
`