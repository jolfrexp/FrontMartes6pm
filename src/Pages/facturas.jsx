import { facturaContext } from '../components/providers/facturasProvider'
import { usuarioContext } from '../components/providers/usuarioProvider'
import { FacturaGet } from '../services/serviciosFactura'
import Factura from '../components/frontend/factura'
import React, { useContext, useEffect } from 'react'
import Header from '../components/frontend/header'
import Footer from '../components/frontend/footer'
import Nav from '../components/frontend/nav' 
import { Link } from 'react-router-dom'
import { useState } from 'react'

function Facturas() {

  let {infoFactura,setInfoFactura} = useContext(facturaContext)
  let {infoUsuario} = useContext(usuarioContext)

  const [facturasList,setFacturasList] =useState([{id:"null",fecha:"0000-00-00",total:0}])
  const cargar=async()=>{
    try {
      const response = await FacturaGet(infoUsuario.id)
      console.log(response)
      if(response.length != 0){
        setFacturasList(response)
        setInfoFactura(response)
        console.log(infoFactura)
        console.log(infoFactura.length)
      } 
    } catch (e) {
      console.error(e)
    }
    }
    useEffect(()=>{
      if (facturasList[0].id == "null") {
      console.log("no hay resultados")
    }else if(facturasList == []){
      console.log("ya hay resultados")
    }},[facturasList])
    useEffect(()=>{
      console.log(facturasList)
      cargar()
    },[])
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
        {facturasList[0].id != "null" ? facturasList.map((reg,i)=><Link className='p' to={`/FacturaX/${i}`}><Factura fac={reg} id={i}/></Link>):(<ul className='home rt'>
      <li className='li'>No</li>
      <li className='li'>Se Encontraron</li>
      <li className='li'>Resultados</li>
      </ul> )}
      </div>
      <Footer class= "footer"/>
    </>
  )
}
export default Facturas