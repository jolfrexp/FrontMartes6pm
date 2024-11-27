import { facturaContext } from '../components/providers/facturasProvider'
import Factura from '../components/frontend/factura'
import Footer from '../components/frontend/footer'
import Header from '../components/frontend/header'
import Nav from '../components/frontend/nav' 
import React, { useContext } from 'react'

function Facturas() {

  let {infoFactura} = useContext(facturaContext)

  return (
    <>
      <div className="p3">
      <Header/>
      <Nav sel4="sec li" sel5="sel li" sel1 ="sec li" sel2 ="sec li" sel3 ="sec li" n5="n" sesion="Cerrar sesion" facturas="Facturas" register= "?"
      ingresos = "Ingresos" gastos= "Gastos" home="Home"/>
      <ul className='home rt'>
        <li className='li animate__animated animate__fadeInDown'>Referencia</li>
        <li className='li animate__animated animate__fadeInUp'>Fecha</li>
        <li className='li animate__animated animate__fadeInDown'>Total</li>
      </ul>
        {infoFactura.map((reg,i)=><Factura fac={reg} id={i}/>)}
      </div>
      <Footer class= "footer"/>
    </>
  )
}
export default Facturas