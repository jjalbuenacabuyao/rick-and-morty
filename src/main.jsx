import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {Home, Characters, Episodes, Locations} from "./containers"
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/characters",
    element: <Characters />
  },
  {
    path: "/episodes",
    element: <Episodes />
  },
  {
    path: "/locations",
    element: <Locations />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
