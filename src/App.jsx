import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Homepage from './Pages/Homepage'

function App() {
 const route = createBrowserRouter (
  createRoutesFromElements (
    <Route>
      <Route path='/' element={<Homepage/>}/>
    </Route>
  )
 )

  return (
    <>
    <RouterProvider router={route}/>
    </>
  )
}

export default App