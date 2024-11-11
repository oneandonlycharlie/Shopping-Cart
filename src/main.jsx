import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Root from './Root.jsx'
import { Shoplist } from './Component/Shoplist.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './Errorpage.jsx'
import { DefaultPage } from './Defaultpage.jsx'
import { ShoppingCart } from './Shoppingcart.jsx'
import { Item } from './Component/Item.jsx'


const router = createBrowserRouter([
  {
    path:"/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children:[
      {index: true, element: <DefaultPage />},
      {path: "shoplist", element: <Shoplist />},
      {path: "shoplist/:name", element: <Item />},
      {path:"checkout", element: <ShoppingCart />},
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
