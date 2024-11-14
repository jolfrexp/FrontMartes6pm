import React from 'react'
import Header from '../components/header'
import Nav from '../components/nav' 
import Footer from '../components/footer'
import { Link } from 'react-router-dom'
import Factura from '../components/factura'
import { useState } from 'react'
function Facturas() {
    const [facturasList,setGastosList] =useState([
        {fecha:"2024-09-02",monto: 375000},
        {fecha:"2024-09-03",monto: 200000},
        {fecha:"2024-09-04",monto: 20000},
        {fecha:"2024-09-05",monto: 140000},
        {fecha:"2024-09-05",monto: 140000},
        {fecha:"2024-09-05",monto: 140000}
      ])
  return (
    <>
    <Header/>
      <Nav sel4="sec li" sel5="sel li" sel1 ="sec li" sel2 ="sec li" sel3 ="sec li" n5="n" sesion="Cerrar sesion" facturas="Facturas" register= "?"
      ingresos = "Ingresos" gastos= "Gastos" home="Home"/>
      <ul className='home rt'>
        <li className='li animate__animated animate__fadeInDown'>Id</li>
        <li className='li animate__animated animate__fadeInUp'>Fecha</li>
        <li className='li animate__animated animate__fadeInDown'>Total</li>
      </ul>
      {facturasList.map((reg,i)=><Link className='p' to={`/FacturaX/${i}`}><Factura fac={reg} id={i}/></Link>)}
      <Footer/>
    </>
  )
}

export default Facturas
