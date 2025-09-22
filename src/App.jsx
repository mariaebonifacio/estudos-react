import './App.css'
import { MyButton } from './Components/MyButton'
import { useState } from 'react';
import ProductsList from './Components/ProductsList'
import ShoppingList from './Components/ShoppingList'

function App() {
  const [count, setCount] = useState(0)

    function handleClick() {
      setCount(count + 1);
    }

  return (
    <>
    <h3>Lista de Produtos</h3>
    <ProductsList/>
    <h3>Lista de Produtos Shopping</h3>
    <ShoppingList/>
    <MyButton count={count} onClick={handleClick}/>
    <MyButton count={count} onClick={handleClick}/>
    </>
  )
}

export default App
