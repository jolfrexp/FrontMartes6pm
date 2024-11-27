import { facturaContext } from '../components/providers/facturasProvider'
import { datosContex } from '../components/providers/DatosGProvider'
import React, {  useState,useContext,useEffect } from 'react'
import { IngresoGet } from '../services/servicesIngreso'
import Header from '../components/frontend/header'
import Footer from '../components/frontend/footer'
import Nav from '../components/frontend/nav'
import { Link } from 'react-router-dom'
import Ingreso from './ingreso'

function Ingresos() {
  let i=0  
 
  
  let {infoFactura} = useContext(facturaContext)
  let{infoDatos,setInfoDatos}= useContext(datosContex)
  const [ingresoList,setIngresoList] = useState([{id:"Referencia",descripcion:"Descripcion",monto:"Monto"}])
  const GetIngresos = async(id)=>{
    try {
      const response  = await IngresoGet(id)
        setIngresoList(data=> [...data, ...response])
        setInfoDatos(data=> [...data, ...response])
    } catch (e) {
      console.error(e)
    }

  }
  useEffect(()=>{
    setInfoDatos([])
    while(i<infoFactura.length){
      GetIngresos(infoFactura[i].id)
      i = i + 1
    }
    setIngresoList([...ingresoList].sort((a,b)=> a.id - b.id))
  },[])
  return (
    <div>
      <div className="p3">
        <Header/>
      <Nav sel2 ="sec li" sel1= "sec li"sel3 ="sel li" sel4 ="sec li" sel5="sec li" facturas="Facturas" n3="n" home= "Home" ingresos="Ingresos" gastos="Gastos" register="?"/>
      {ingresoList.map((reg,i)=><Link className='p' to={`*`}><Ingreso ingreso={reg} id={i}/></Link>)}
      </div>
      
    <Footer class ="footer"/>
    </div>
  )
}
export default Ingresos