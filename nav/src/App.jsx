import { useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { Home } from './pages/Home';
import Login from './pages/Login';
import { Register } from './pages/Register';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  }
])
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App
