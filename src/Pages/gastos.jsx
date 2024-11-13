import React, { useState } from 'react'
import Header from '../components/header'
import Nav from '../components/nav'
import Gasto from './gasto'
import { Link } from 'react-router-dom'
import Footer from '../components/footer'
// import Swal from 'sweetalert2'
function Gastos() {
  const [gastosList,setGastosList] =useState([
    {id:"001",descripcion:"Prestamo",monto: 375000},
    {id:"002",descripcion:"Comida",monto: 200000},
    {id:"003",descripcion:"Mama",monto: 20000},
    {id:"004",descripcion:"Hermana",monto: 140000}
  ]) 
  return (
    <div>
      <Header/>
      <Nav sel4 ="sec" sel1= "sec"sel2 ="sel" sel3 ="sec"sel5="sec" facturas="Facturas" n2="n" home= "Home" ingresos="Ingresos" gastos="Gastos" register="?" />
      <ul className='home rt'>
        <li className='animate__animated animate__fadeInDown'>Id</li>
        <li className='animate__animated animate__fadeInUp'>Descripcion</li>
        <li className='animate__animated animate__fadeInDown'>Monto</li>
      </ul>
      {gastosList.map((reg,i)=><Link className='p' to={`*`}><Gasto gastos={reg} id={i}/></Link>)}
        <Footer/>
    </div>
  )
}

export default Gastos
