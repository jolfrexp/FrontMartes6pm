import { datosContex } from '../components/providers/DatosGProvider'
import Footer from '../components/frontend/footer'
import Header from '../components/frontend/header'
import Nav from '../components/frontend/nav'
import React, { useContext } from 'react'
import Gasto from './gasto'
function Gastos() {
  let {infoDatos2}= useContext(datosContex)

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
      {infoDatos2.map((reg,i)=><Gasto gastos={reg} id={i}/>)}        
      </div>
      <Footer class = "footer"/>
    </div>
  )
}
export default Gastos