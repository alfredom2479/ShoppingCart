import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";


import Home from "./pages/Home.jsx"
import Catalog from './pages/Catalog.jsx';
import NavLayout from './components/NavLayout.jsx';

import {
  loader as catalogLoader,
} from "./pages/Catalog.jsx";

import {action as addItemAction} from "./components/ItemCard.jsx"

import "./index.css";


const router = createBrowserRouter([
  {
    path: "/",
    element: <NavLayout/>,
    action: addItemAction,
    children:[
      {
        index:true,
        element: <Home/>
      },
      {
        path: "shop",
        element: <Catalog/>,
        loader: catalogLoader,
      },
      {
        path: "cart",
        element: <h1>cause im into u</h1>
      }

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
