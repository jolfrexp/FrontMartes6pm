import Home from './Pages/home'
import Dashboard from './Pages/admin/dashboard'
import Principal from './Pages/principal'
import './App.css'
import 'animate.css'
import { Routes,Route, Navigate } from 'react-router-dom'
import Gastos from './Pages/gastos'
import Ingresos from './Pages/ingresos'
import NotFound from './components/frontend/NotFound'
import Facturas from './Pages/facturas'
import { UsuarioProvider } from './components/providers/usuarioProvider'
import { IngresoProvider } from './components/providers/ingresosProvider'
import {  useState } from 'react'
function App() {
  const [isAutorized,setIsAutorized] = useState(false)
  let handleLogin =()=>{
    setIsAutorized(!isAutorized)
  }

  return (
    <>
    <UsuarioProvider>
      <IngresoProvider>
      <Routes>
      <Route path='/' element = {<Principal onlogin ={handleLogin}/>}/>
      <Route path='/Home' element = {isAutorized?<Home onlogin ={handleLogin}/>:<Navigate to="/"/>}/>
      <Route path='/Gastos' element = {isAutorized?<Gastos/>:<Navigate to="/"/>}/>
      <Route path='/Ingresos' element = {isAutorized?<Ingresos/>:<Navigate to="/"/>}/>
      <Route path='/Facturas' element={isAutorized?<Facturas/>:<Navigate to="/"/>}/>
      <Route path='/Dashboard/:id' element={isAutorized?<Dashboard/>:<Navigate to="/"/>}/>
      <Route path='*' element={<NotFound/>}/>
      </Routes>
      </IngresoProvider>
    </UsuarioProvider>
    
    </>
  )
}

export default App
