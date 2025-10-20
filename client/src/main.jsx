import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import Root from './Root'
import Users from './Components/Users'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
  },
  {
    path: '/users',
    element: <Users></Users>,
    loader: () => fetch('http://localhost:5000/users')
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
