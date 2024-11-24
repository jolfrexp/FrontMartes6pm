import Header from '../components/frontend/header'
import Footer from '../components/frontend/footer'
import Nav from '../components/frontend/nav'
import React, {  useState } from 'react'
import { Link } from 'react-router-dom'
import Ingreso from './ingreso'

function Ingresos() {

  let [ingresoList,setIngresoList] = useState([{id:"null",fecha:"0000-00-00",total:0}])

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
      
    <Footer class ="footer"/>
    </div>
  )
}
export default Ingresos