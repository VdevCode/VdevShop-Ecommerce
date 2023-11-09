
import { Outlet } from 'react-router-dom'
import './App.css'
import NavItems from './components/NavItems'

function App() {

  return (
    <>
    <NavItems />
      <Outlet />
    </>
  )
}

export default App
