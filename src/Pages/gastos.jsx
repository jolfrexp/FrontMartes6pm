import { facturaContext } from '../components/providers/facturasProvider'
import { datosContex } from '../components/providers/DatosGProvider'
import React, { useContext, useEffect, useState } from 'react'
import { GastoGet } from '../services/servicesGasto'
import Footer from '../components/frontend/footer'
import Header from '../components/frontend/header'
import Nav from '../components/frontend/nav'
import { Link } from 'react-router-dom'
import Gasto from './gasto'
function Gastos() {

  let i=0  

  let {infoFactura} = useContext(facturaContext)
  let{infoDatos,setInfoDatos}= useContext(datosContex)

  const [gastosList,setGastosList] =useState([{id:"Referencia",descripcion:"Descripcion",monto:"Monto"}])
  const GetGastos = async(id)=>{
    try {
      const response  = await  GastoGet(id)
      setGastosList(data=> [...data, ...response])
    } catch (e) {
      console.error(e)
    }

  }
  
  useEffect(()=>{
    while(i<infoFactura.length){
    GetGastos(infoFactura[i].id)
    i = i + 1
    }
    setGastosList([...gastosList].sort((a,b)=>a.id-b.id))
    gastosList.slice(1).map((gasto,id)=>setInfoDatos((data)=>data - gasto.monto))
  },[])
  return (
    <div>
      <div className="p3">
      <Header/>
      <Nav sel4 ="sec li" sel1= "sec li"sel2 ="sel li" sel3 ="sec li"sel5="sec li" facturas="Facturas" n2="n" home= "Home" ingresos="Ingresos" gastos="Gastos" register="?" />
      {gastosList.map((reg,i)=><Link className='p' to={`*`}><Gasto gastos={reg} id={i}/></Link>)}        
      </div>
      <Footer class = "footer"/>
    </div>
  )
}
export default Gastos