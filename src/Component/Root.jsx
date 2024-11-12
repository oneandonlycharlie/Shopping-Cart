import { useState, useEffect } from 'react'
import '../CSS/Root.css'
import { Link, Outlet} from 'react-router-dom'

function Root() {
  const [inventory, setInventory] = useState([])

  useEffect(()=>{
    const fetchData = async ()=> {
      let response = await fetch("https://fakestoreapi.com/products");
      let data = await response.json();
      data.map(item => {
        {item['selected'] = false, item['quantity']=0}
      })
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
