import React, { useContext, useState } from 'react'
import Header from '../components/frontend/header'
import Nav from '../components/frontend/nav'
import Gasto from './gasto'
import { Link } from 'react-router-dom'
import Footer from '../components/frontend/footer'
import { facturaContext } from '../components/providers/facturasProvider'
import { GastoGet } from '../services/servicesGasto'
// import Swal from 'sweetalert2'
function Gastos() {
  const [gastosList,setGastosList] =useState([
    {descripcion:"Prestamo",monto: 375000},
    {descripcion:"Prestamo",monto: 375000},
    {descripcion:"Prestamo",monto: 375000},
    {descripcion:"Prestamo",monto: 375000},
    
  ])
  let {infoFactura} = useContext(facturaContext)
  let i=0
  while(i<infoFactura.length){
    const GetGastos = async(id)=>{
      try {
        const response  = await  GastoGet(id)
        if(i==0){
         setGastosList(response.data)
        }else{
          setGastosList((data) => [...data, response.data])
        }
      } catch (e) {
        console.error(e)
      }

    }
    GetGastos(infoFactura[i].id)
    i = i + 1
  }
  return (
    <div>
      <div className="p3">
      <Header/>
      <Nav sel4 ="sec li" sel1= "sec li"sel2 ="sel li" sel3 ="sec li"sel5="sec li" facturas="Facturas" n2="n" home= "Home" ingresos="Ingresos" gastos="Gastos" register="?" />
      <ul className='home rt'>
        <li className='li animate__animated animate__fadeInDown'>Referencia</li>
        <li className='li animate__animated animate__fadeInUp'>Descripcion</li>
        <li className='li animate__animated animate__fadeInDown'>Monto</li>
      </ul>
      {gastosList.map((reg,i)=><Link className='p' to={`*`}><Gasto gastos={reg} id={i}/></Link>)}        
      </div>
      <Footer/>
    </div>
  )
}

export default Gastos
