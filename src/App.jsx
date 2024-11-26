import { IngresoProvider } from './components/providers/ingresosProvider'
import { FacturaProvider } from './components/providers/facturasProvider'
import { UsuarioProvider } from './components/providers/usuarioProvider'
import { GastosProvider } from './components/providers/gastosProvider'
import { DatosProvider } from './components/providers/DatosGProvider'
import { Routes,Route, Navigate } from 'react-router-dom'
import NotFound from './components/frontend/NotFound'
import Dashboard from './Pages/admin/dashboard'
import Principal from './Pages/principal'
import Facturas from './Pages/facturas'
import Ingresos from './Pages/ingresos'
import Gastos from './Pages/gastos'
import { useState } from 'react'
import Home from './Pages/home'
import 'animate.css'
import './App.css'

function App() {
  const [isAutorized,setIsAutorized] = useState(false)
  let handleLogin =()=>{
    setIsAutorized(!isAutorized)
  }
  return (
    <>
    <UsuarioProvider>
      <IngresoProvider>
        <GastosProvider>
          <FacturaProvider>
            <DatosProvider>
              <Routes>
                <Route path='/' element = {<Principal onlogin ={handleLogin}/>}/>
                <Route path='/Home' element = {isAutorized?<Home onlogin ={handleLogin}/>:<Navigate to="/"/>}/>
                <Route path='/Gastos' element = {isAutorized?<Gastos/>:<Navigate to="/"/>}/>
                <Route path='/Ingresos' element = {isAutorized?<Ingresos/>:<Navigate to="/"/>}/>
                <Route path='/Facturas' element={isAutorized?<Facturas/>:<Navigate to="/"/>}/>
                <Route path='/Dashboard/:id' element={isAutorized?<Dashboard/>:<Navigate to="/"/>}/>
                <Route path='*' element={<NotFound/>}/>
              </Routes>
            </DatosProvider>
          </FacturaProvider>
        </GastosProvider>
      </IngresoProvider>
    </UsuarioProvider>
    </>
  )
}
export default App