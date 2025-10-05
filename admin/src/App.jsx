
import { Route,Routes } from "react-router-dom"
import Dashboard from "./pages/dashboard"
import Signup from "./pages/Signup"
import Login from "./pages/login"

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/signin' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </>
  )
}
