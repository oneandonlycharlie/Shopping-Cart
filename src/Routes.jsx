import { createBrowserRouter } from 'react-router-dom'
import Root from './Component/Root.jsx'
import { Shoplist } from './Component/Shoplist.jsx'
import ErrorPage from './Component/Errorpage.jsx'
import { DefaultPage } from './Component/Defaultpage.jsx'
import { ShoppingCart } from './Component/Shoppingcart.jsx'
import { Item } from './Component/Item.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children:[
      {index: true, element: <DefaultPage />},
      {path: "shoplist", element: <Shoplist />},
      {path: "shoplist/:id", element: <Item />},
      {path:"checkout", element: <ShoppingCart />},
    ]
  }
])

export default router