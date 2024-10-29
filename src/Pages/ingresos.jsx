import React, { useEffect, useState } from 'react'
import Header from '../components/header'
import Nav from '../components/nav'
import Ingreso from './ingreso'
import { Link } from 'react-router-dom'
import Footer from '../components/footer'
function Ingresos() {
  const [id,setId] = useState(0)
  const [nombre,setNombre] = useState("")
  const [descripcion,setDescripcion] = useState("")
  const [monto,setMonto] = useState(0)
  let [ingresoList,setIngresoList] = useState([
    {id:"001",nombre:"Nomina",descripcion:"Pago nomina 10 nov",monto: 475000},
    {id:"002",nombre:"Venta de Tortas",descripcion:"Ventas de tortas",monto: 200000},
    {id:"003",nombre:"Propinas",descripcion:"Propinas desde 1ro nov hasta 15nov",monto: 20000},
    {id:"004",nombre:"Trabajo medio turno",descripcion:"Pago nomina 10 nov trabajo secundario",monto: 140000}
  ])
  const cargar = ()=>{
    if(id != 0 && nombre !="" && descripcion !="" && monto != 0){
      setIngresoList([...ingresoList,{id:id,nombre:nombre,descripcion:descripcion,monto:monto}])
      setId()
      setNombre("")
      setDescripcion("")
      setMonto()
    }else{  
      alert("A ocurrido un error")
    }

  }
  return (
    <div>
      <Header/>
      <Nav sel2 ="sec" sel1= "sec"sel3 ="sel" sel4 ="sec" n3="n" home= "Home" ingresos="Ingresos" gastos="Gastos" register="Jolfre Gonzalez" sesion="Cerrar sesion"/>
      <ul className='home rt'>
        <li className='animate__animated animate__fadeInLeft'>Id</li>
        <li className='animate__animated animate__fadeInLeft'>Nombre</li>
        <li className='animate__animated animate__fadeInRight'>Descripcion</li>
        <li className='animate__animated animate__fadeInRight'>Monto</li>
      </ul>

          {ingresoList.map((reg,i)=><Link className='p' to={`/IngresoX/${i}`}><Ingreso ingreso={reg} id={i}/></Link>)}
       
        <div className="ing">
          <div><div><label>Id</label></div>
          <input type="number" id='inputId' value={id} onChange={(e)=>{setId(e.target.value)}}/></div>
          
          <div>
            <div><label>Nombre</label></div>
            <input type="text" id="inputNombre" value={nombre} onChange={(e)=>{setNombre(e.target.value)}}/>
          </div>
          <div>
            <div><label>Descripcion</label></div>
            <input type="text" id='inputDescripcion' value={descripcion} onChange={(e)=>{setDescripcion(e.target.value)}}/>
          </div>
          <div>
            <div><label>Monto</label></div>
            <input type="number" id='inputMonto' value={monto} onChange={(e)=>{setMonto(e.target.value)}}/>
          </div>
        </div>
        <div className="boton">
          <button className='button' onClick={cargar}>Agregar Ingreso</button>    
        </div>
          
    <Footer/>
    </div>
  )
}

export default Ingresos
