import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";


import Home from "./pages/Home.jsx"
import NavLayout from './components/NavLayout.jsx';
//import App from './App.jsx'
/*import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";*/

import './index.css'

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
        element: <h1>are u into me</h1>
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
