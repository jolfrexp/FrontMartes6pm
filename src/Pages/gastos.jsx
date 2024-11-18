import React, { useState } from 'react'
import Header from '../components/frontend/header'
import Nav from '../components/frontend/nav'
import Gasto from './gasto'
import { Link } from 'react-router-dom'
import Footer from '../components/frontend/footer'
// import Swal from 'sweetalert2'
function Gastos() {
  const [gastosList,setGastosList] =useState([
    {descripcion:"Prestamo",monto: 375000},
    {descripcion:"Prestamo",monto: 375000},
    {descripcion:"Prestamo",monto: 375000},
    {descripcion:"Prestamo",monto: 375000},
    {descripcion:"Comida",monto: 200000},
    {descripcion:"Mama",monto: 20000},
    {descripcion:"Hermana",monto: 140000}
  ]) 
  return (
    <div>
      <Header/>
      <Nav sel4 ="sec li" sel1= "sec li"sel2 ="sel li" sel3 ="sec li"sel5="sec li" facturas="Facturas" n2="n" home= "Home" ingresos="Ingresos" gastos="Gastos" register="?" />
      <ul className='home rt'>
        <li className='li animate__animated animate__fadeInDown'>Id</li>
        <li className='li animate__animated animate__fadeInUp'>Descripcion</li>
        <li className='li animate__animated animate__fadeInDown'>Monto</li>
      </ul>
      {gastosList.map((reg,i)=><Link className='p' to={`*`}><Gasto gastos={reg} id={i}/></Link>)}
        <Footer/>
    </div>
  )
}

export default Gastos
