import { datosContex } from '../components/providers/DatosGProvider'
import React, {  useState,useContext,useEffect } from 'react'
import Header from '../components/frontend/header'
import Footer from '../components/frontend/footer'
import Nav from '../components/frontend/nav'
import Ingreso from './ingreso'

function Ingresos() {
  let{infoDatos,setInfoDatos}= useContext(datosContex)
  return (
    <div>
      <div className="p3">
        <Header/>
      <Nav sel2 ="sec li" sel1= "sec li"sel3 ="sel li" sel4 ="sec li" sel5="sec li" facturas="Facturas" n3="n" home= "Home" ingresos="Ingresos" gastos="Gastos" register="?"/>
      <ul className='home rt'>
        <li className='li animate__animated animate__fadeInDown'>Referencia</li>
        <li className='li animate__animated animate__fadeInUp'>Descripcion</li>
        <li className='li animate__animated animate__fadeInDown'>Monto</li>
      </ul>
      {infoDatos.map((reg,i)=><Ingreso ingreso={reg} id={i}/>)}
      </div>
      
    <Footer class ="footer"/>
    </div>
  )
}
export default Ingresos