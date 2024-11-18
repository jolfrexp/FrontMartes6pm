import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/frontend/header'
import Nav from '../components/frontend/nav'
import Footer from '../components/frontend/footer'
import Graphic from '../components/graficas/Graphic'
import FacturaIn from '../components/frontend/facturaIn'
import { usuarioContext } from '../components/providers/usuarioProvider'
import User from '../components/frontend/user'
function Home({onLogin}) {
  let {infoUsuario} = useContext(usuarioContext)
  const [showFactura,setShowFactura] = useState(false)
  const [showPerfil,setShowPerfil] = useState(false)
  const togglePerfil = () =>{
    setShowPerfil(!showPerfil)
  }
  const toggleFactura = () =>{
      setShowFactura(!showFactura)
  }
  useEffect(()=>{console.log(infoUsuario)},[infoUsuario])
  const ingresos = 610512;
  const gastos = 482343;
  const balance = ingresos - gastos;
  return (
    <div className='home'>
      <Header class = {showPerfil ? 'opc' :""}/>
      {showPerfil ?<User onLogin={onLogin} togglePerfil={togglePerfil}/>:"" }
      <Nav class ={showPerfil ? 'opc' :""} sel4="sec li" sel5="sec li" sel1 ="sel li" sel2 ="sec li" sel3 ="sec li" n1="n" sesion="Cerrar sesion" facturas="Facturas" register= {infoUsuario.nombre}
      ingresos = "Ingresos" gastos= "Gastos" home="Home" togglePerfil={togglePerfil}/>
      <h1 className={showPerfil ? 'opc' :"p"}>Balance general</h1>
      <main className={showPerfil ? 'opc' :"animate__animated animate__fadeInUp"}>
        <Graphic ingresos={ingresos} gastos={gastos} balance={balance}/>
      </main> 
      <div className={showPerfil ? 'opc botones' :"botones"}>
        <button className='button p2' onClick={toggleFactura}>Ingresar Factura</button>
        
      </div>
      {showFactura ? <div className="FTR"> <FacturaIn toggleFactura={toggleFactura}/></div> :""}
      <Footer class = {showPerfil ? 'opc' :""}/>
    </div>
  )
}

export default Home
