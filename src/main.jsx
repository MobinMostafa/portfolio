import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './Layout.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import Home from './pages/Home.jsx'
import ErrorPage from './pages/ErrorPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path:'/',
        element: <Home/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
