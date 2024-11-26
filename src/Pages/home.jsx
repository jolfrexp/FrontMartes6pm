import { ingresoContext } from '../components/providers/ingresosProvider'
import { usuarioContext } from '../components/providers/usuarioProvider'
import { gastosContex } from '../components/providers/gastosProvider'
import React, { useContext, useEffect, useState } from 'react'
import FacturaIn from '../components/frontend/facturaIn'
import Graphic from '../components/graficas/Graphic'
import Header from '../components/frontend/header'
import Footer from '../components/frontend/footer'
import User from '../components/frontend/user'
import Nav from '../components/frontend/nav'
import '../assets/css/frontend/home.css'

function Home({onLogin}) {
  const [ingresos,setIngresos] = useState(0);
  const [gastos,setGastos] = useState(10);
  const balance = ingresos - gastos;

  let {infoUsuario} = useContext(usuarioContext)
  let {setInfoGastos} = useContext(gastosContex)
  let {setInfoIngreso} = useContext(ingresoContext)

  const [showFactura,setShowFactura] = useState(false)
  const [showPerfil,setShowPerfil] = useState(false)

  const togglePerfil = () =>{
    setShowPerfil(!showPerfil)
  }

  const toggleFactura = () =>{
    if(showFactura){
      setShowFactura(!showFactura)
      setInfoGastos([])
      setInfoIngreso([])
    }else{
      setShowFactura(!showFactura)
    }
  }
  const Gastos=()=>{

  }
  const Ingresos=()=>{

  }

  useEffect(()=>{
    console.log(infoUsuario)
  },[infoUsuario])
  return (
    <>
      <div className='home p3'>
        <Header class = {showPerfil ? 'opc' :""}/>
        {showPerfil ?<User onLogin={onLogin} togglePerfil={togglePerfil}/>:"" }
        {showFactura ? <div className="FTR"> <FacturaIn toggleFactura={toggleFactura}/></div> :""}
        <Nav class ={showPerfil ? 'opc' :""} sel4="sec li" sel5="sec li" sel1 ="sel li" sel2 ="sec li" sel3 ="sec li" n1="n" sesion="Cerrar sesion" facturas="Facturas" register= {infoUsuario.nombre}
        ingresos = "Ingresos" gastos= "Gastos" home="Home" togglePerfil={togglePerfil} togglePerfil2={toggleFactura} register2="Ingresar Factura"/>
        <h1 className={showPerfil ? 'opc' :"p"}>Balance general</h1>
        <main className={showPerfil ? 'opc' :""}>
          <Graphic ingresos={ingresos} gastos={gastos} balance={balance}/>
        </main>     
      </div>
      <Footer class = {showPerfil ? 'opc footer' :"footer"}/>
    </>
  )
}
export default Home