import React, {  useState } from 'react'
import Header from '../components/frontend/header'
import Nav from '../components/frontend/nav'
import Ingreso from './ingreso'
import { Link } from 'react-router-dom'
import Footer from '../components/frontend/footer'
function Ingresos() {
  let [ingresoList,setIngresoList] = useState([
    {nombre:"Nomina",descripcion:"Pago nomina 10 nov",monto: 475000},
    {nombre:"Nomina",descripcion:"Pago nomina 10 nov",monto: 475000},
    {nombre:"Nomina",descripcion:"Pago nomina 10 nov",monto: 475000},
    {nombre:"Nomina",descripcion:"Pago nomina 10 nov",monto: 475000},
    
  ])
  return (
    <div>
      <div className="p3">
        <Header/>
      <Nav sel2 ="sec li" sel1= "sec li"sel3 ="sel li" sel4 ="sec li" sel5="sec li" facturas="Facturas" n3="n" home= "Home" ingresos="Ingresos" gastos="Gastos" register="?"/>
      <ul className='home rt'>
        <li className='li animate__animated animate__fadeInLeft'>Referencia</li>
        <li className='li animate__animated animate__fadeInDown'>Descripcion</li>
        <li className='li animate__animated animate__fadeInRight'>Monto</li>
      </ul>

          {ingresoList.map((reg,i)=><Link className='p' to={`*`}><Ingreso ingreso={reg} id={i}/></Link>)}
      </div>
      
    <Footer/>
    </div>
  )
}

export default Ingresos
