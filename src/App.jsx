import Home from './Pages/home'
import Principal from './Pages/principal'
import './App.css'
import 'animate.css'
import { Routes,Route } from 'react-router-dom'
import Gastos from './Pages/gastos'
import Ingresos from './Pages/ingresos'
import GastosX from './components/GastosX'
import IngresoX from './components/ingresoX'
function App() {

  return (
    <>
    <Routes>
      <Route path='/' element = {<Principal/>}/>
      <Route path='/Home' element = {<Home/>}/>
      <Route path='/Gastos' element = {<Gastos/>}/>
      <Route path='/Ingresos' element = {<Ingresos/>}/>
      <Route path='/GastoX/:id' element = {<GastosX/>}/>
      <Route path='/IngresoX/:id' element ={<IngresoX/>} ></Route>
    </Routes>
    </>
  )
}

export default App
