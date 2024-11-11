import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './Root.css'
import { Link, Outlet, useOutletContext } from 'react-router-dom'

function Root() {
  const [inventory, setInventory] = useState([])

  useEffect(()=>{
    const fetchData = async ()=> {
      let response = await fetch("https://fakestoreapi.com/products");
      let data = await response.json();
      setInventory(data);
    };
    fetchData();
  },[])

  return (
    <>
      <header>
        <div className='navbar'>
          <Link to="/">Home</Link>
          <Link to="shoplist">Shop</Link>
          <Link to="checkout">Checkout</Link>
        </div>
      </header>
      <main>
        <Outlet context={[inventory, setInventory]} />
      </main>
    </>
  )
}

export default Root
