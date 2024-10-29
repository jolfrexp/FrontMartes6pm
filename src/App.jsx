import Home from './Pages/home'
import Principal from './Pages/principal'
import './App.css'
import 'animate.css'
import { Routes,Route } from 'react-router-dom'
import Gastos from './Pages/gastos'
import Ingresos from './Pages/ingresos'
function App() {

  return (
    <>
    <Routes>
      <Route path='/' element = {<Principal/>}></Route>
      <Route path='/Home' element = {<Home/>}/>
      <Route path='/Gastos' element = {<Gastos/>}></Route>
      <Route path='/Ingresos' element = {<Ingresos/>}></Route>
    </Routes>
    </>
  )
}

export default App
