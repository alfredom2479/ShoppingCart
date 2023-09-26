import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";


import Home from "./pages/Home.jsx"
import Catalog from './pages/Catalog.jsx';
import NavLayout from './components/NavLayout.jsx';

import {loader as catalogLoader} from "./pages/Catalog.jsx";
import{loader as cartLoader} from "./pages/CartPage.jsx"

import {action as addItemAction} from "./components/ItemCard.jsx"

import "./index.css";
import CartPage from './pages/CartPage.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <NavLayout/>,
    children:[
      {
        index:true,
        element: <Home/>
      },
      {
        path: "shop",
        element: <Catalog/>,
        loader: catalogLoader,
        action: addItemAction
      },
      {
        path: "cart",
        element: <CartPage/>,
        loader: cartLoader
      }

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
