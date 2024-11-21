import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/frontend/header'
import Nav from '../components/frontend/nav'
import Footer from '../components/frontend/footer'
import Graphic from '../components/graficas/Graphic'
import FacturaIn from '../components/frontend/facturaIn'
import { usuarioContext } from '../components/providers/usuarioProvider'
import { ingresoContext } from '../components/providers/ingresosProvider'
import User from '../components/frontend/user'
import { gastosContex } from '../components/providers/gastosProvider'
import Swal from 'sweetalert2'
function Home({onLogin}) {
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
      Swal.fire({
            title: "Estas seguro?",
            text: "Se eliminara todo al salir",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Salir"
          }).then((result) => {
            if (result.isConfirmed) {
              setShowFactura(!showFactura)
              setInfoGastos([])
              setInfoIngreso([])
            }
          });
    }else{
      setShowFactura(!showFactura)
    }
    
      

  }
  useEffect(()=>{console.log(infoUsuario)},[infoUsuario])
  const ingresos = 610512;
  const gastos = 482343;
  const balance = ingresos - gastos;
  return (
    <>
      <div className='home p3'>
      <Header class = {showPerfil ? 'opc' :""}/>
      {showPerfil ?<User onLogin={onLogin} togglePerfil={togglePerfil}/>:"" }
      {showFactura ? <div className="FTR"> <FacturaIn toggleFactura={toggleFactura}/></div> :""}
      {}
      <Nav class ={showPerfil ? 'opc' :""} sel4="sec li" sel5="sec li" sel1 ="sel li" sel2 ="sec li" sel3 ="sec li" n1="n" sesion="Cerrar sesion" facturas="Facturas" register= {infoUsuario.nombre}
      ingresos = "Ingresos" gastos= "Gastos" home="Home" togglePerfil={togglePerfil} togglePerfil2={toggleFactura} register2="Ingresar Factura"/>
      <h1 className={showPerfil ? 'opc' :"p"}>Balance general</h1>
      <main className={showPerfil ? 'opc' :"animate__animated animate__fadeInUp"}>
        <Graphic ingresos={ingresos} gastos={gastos} balance={balance}/>
      </main>     
    </div>
    <Footer class = {showPerfil ? 'opc' :""}/>
    </>
  )
}

export default Home
