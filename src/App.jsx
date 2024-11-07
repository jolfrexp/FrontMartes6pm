import Home from './Pages/home'
import Principal from './Pages/principal'
import './App.css'
import 'animate.css'
import { Routes,Route } from 'react-router-dom'
import Gastos from './Pages/gastos'
import Ingresos from './Pages/ingresos'
import NotFound from './components/NotFound'
import Facturas from './Pages/facturas'
import {UsuarioProvider} from './components/usuarioProvider'
import User from './Pages/user'
function App() {

  return (
    <>
    <UsuarioProvider>
      <Routes>
      <Route path='/' element = {<Principal/>}/>
      <Route path='/Home' element = {<Home/>}/>
      <Route path='/Gastos' element = {<Gastos/>}/>
      <Route path='/Ingresos' element = {<Ingresos/>}/>
      <Route path='/Facturas' element={<Facturas/>}/>
      <Route path='/User' element={<User/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    </UsuarioProvider>
    
    </>
  )
}

export default App
