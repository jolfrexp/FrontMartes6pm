import React, {  useState } from 'react'
import Header from '../components/header'
import Nav from '../components/nav'
import Ingreso from './ingreso'
import { Link } from 'react-router-dom'
import Footer from '../components/footer'
function Ingresos() {
  let [ingresoList,setIngresoList] = useState([
    {id:"001",nombre:"Nomina",descripcion:"Pago nomina 10 nov",monto: 475000},
    {id:"002",nombre:"Venta de Tortas",descripcion:"Ventas de tortas",monto: 200000},
    {id:"003",nombre:"Propinas",descripcion:"Propinas desde 1ro nov hasta 15nov",monto: 20000},
    {id:"004",nombre:"Trabajo medio turno",descripcion:"Pago nomina 10 nov trabajo secundario",monto: 140000}
  ])
  return (
    <div>
      <Header/>
      <Nav sel2 ="sec" sel1= "sec"sel3 ="sel" sel4 ="sec" sel5="sec" facturas="Facturas" n3="n" home= "Home" ingresos="Ingresos" gastos="Gastos" register="?"/>
      <ul className='home rt'>
        <li className='animate__animated animate__fadeInLeft'>Id</li>
        <li className='animate__animated animate__fadeInDown'>Descripcion</li>
        <li className='animate__animated animate__fadeInRight'>Monto</li>
      </ul>

          {ingresoList.map((reg,i)=><Link className='p' to={`*`}><Ingreso ingreso={reg} id={i}/></Link>)}
    <Footer/>
    </div>
  )
}

export default Ingresos
