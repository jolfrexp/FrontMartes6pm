import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/header'
import Nav from '../components/nav'
import Footer from '../components/footer'
import Graphic from '../graficas/Graphic'
import Categoria from '../components/categoria'
import MetodosDePago from '../components/metodosDePago'
import FacturaIn from '../components/facturaIn'
import { usuarioContext } from '../components/usuarioProvider'
import User from '../components/user'
function Home({onLogin}) {
  let {infoUsuario} = useContext(usuarioContext)
  const [showCategoria,setShowCategoria] = useState(false)
  const [showMetodoDePago,setShowMetodoDePago] =useState(false)
  const [showFactura,setShowFactura] = useState(false)
  const [showPerfil,setShowPerfil] = useState(false)
  const togglePerfil = () =>{
    setShowPerfil(!showPerfil)
  }
  const toggleFactura = () =>{
      setShowFactura(!showFactura)
  }
  const toggleCategoria = () =>{
    setShowCategoria(!showCategoria)
  }
  const toggleMetodo = ()=>{
    setShowMetodoDePago(!showMetodoDePago)
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
      {showCategoria || showMetodoDePago ? "" :<div className={showPerfil ? 'opc botones' :"botones"}>
        <button className='button p2' onClick={toggleFactura}>Ingresar Factura</button>
        <button className='button p2' onClick={toggleCategoria}>Agregar Categoria</button>
        <button className='button p2' onClick={toggleMetodo}>Agregar Metodo de pago</button>
        </div>}
      {showCategoria ? <div className="categoria"><Categoria toggleCategoria={toggleCategoria}/></div> :""}
      {showMetodoDePago ? <div className="MDP"> <MetodosDePago toggleMetodo={toggleMetodo}/></div> :""}
      {showFactura ? <div className="FTR"> <FacturaIn toggleMetodo={toggleMetodo}/></div> :""}
      <Footer class = {showPerfil ? 'opc' :""}/>
    </div>
  )
}

export default Home
