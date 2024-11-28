import { ingresoContext } from '../components/providers/ingresosProvider'
import { facturaContext } from '../components/providers/facturasProvider'
import { usuarioContext } from '../components/providers/usuarioProvider'
import { gastosContex } from '../components/providers/gastosProvider'
import { datosContex } from '../components/providers/DatosGProvider'
import React, { useContext, useEffect, useState } from 'react'
import { FacturaGet } from '../services/serviciosFactura'
import FacturaIn from '../components/frontend/facturaIn'
import { IngresoGet } from '../services/servicesIngreso'
import { GastoGet } from '../services/servicesGasto'
import Graphic from '../components/graficas/Graphic'
import Header from '../components/frontend/header'
import Footer from '../components/frontend/footer'
import User from '../components/frontend/user'
import Nav from '../components/frontend/nav'
import '../assets/css/frontend/home.css'

function Home({onLogin}) {
  let i=0 
  let j=0 

  const [ingresos,setIngresos] = useState(0);
  const [gastos,setGastos] = useState(0);
  const balance = ingresos - gastos;

  let {infoUsuario} = useContext(usuarioContext)
  let {setInfoGastos} = useContext(gastosContex)
  let {setInfoIngreso} = useContext(ingresoContext)
  let{infoDatos2,setInfoDatos2,infoDatos,setInfoDatos}= useContext(datosContex)
  let {infoFactura,setInfoFactura} = useContext(facturaContext)
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
  const CargarDatos=()=>{
    const totalIngreso = infoDatos.reduce((acc,ingreso)=>acc + ingreso.monto,0)
    const totalGasto = infoDatos2.reduce((acc,gasto) =>acc + gasto.monto,0)
    setGastos(totalGasto)
    setIngresos(totalIngreso)
  }
  const cargar = async () => {
    setInfoDatos([])
    setInfoDatos2([])
    setInfoFactura([])
    try {
      const response = await FacturaGet(infoUsuario.id)
      console.log(response)
      if (response.length !== 0) {
        setInfoFactura(response)
        let tempDatos2 = []
        let tempDatos = []
        for (let i = 0; i < response.length; i++) {
          const response2 = await GastoGet(response[i].id)
          tempDatos2 = [...tempDatos2, ...response2]
          const response3 = await IngresoGet(response[i].id)
          console.log(response3)
          tempDatos = [...tempDatos, ...response3]
        }
        setInfoDatos2(tempDatos2)
        setInfoDatos(tempDatos)
      }
    } catch (e) {
      console.error(e)
    }
  };
  

  useEffect(() => {
    const load = async () => {
      try {
        await cargar();
      } catch (e) {
        console.error(e);
      }
    };
    load();
  }, []);
  
  useEffect(()=>{
    CargarDatos()
  },[infoDatos2,infoDatos])
useEffect(()=>{if (infoFactura.length !=0) {
  console.log(infoDatos)
  console.log(infoDatos2)

}},[infoFactura])
  return (
    <>
      <div className='home p3'>
        <Header class = {showPerfil ? 'opc' :""}/>
        {showPerfil ?<User onLogin={onLogin} togglePerfil={togglePerfil} gastos={gastos} ingresos={ingresos} balance={balance}/>:"" }
        {showFactura ? <div className="FTR"> <FacturaIn toggleFactura={toggleFactura} cargar={cargar} /></div> :""}
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