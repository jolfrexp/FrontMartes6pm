import React, { useState } from 'react'
import Header from '../components/header'
import Nav from '../components/nav'
import Gasto from './gasto'
import { Link } from 'react-router-dom'
import Footer from '../components/footer'
function Gastos() {
  const [id,setId] = useState(0)
  const [nombre,setNombre] = useState("")
  const [descripcion,setDescripcion] = useState("")
  const [monto,setMonto] = useState(0)
  const [gastosList,setGastosList] =useState([
    {id:"001",nombre:"Prestamo",descripcion:"Pago 11nov",monto: 375000},
    {id:"002",nombre:"Comida",descripcion:"COmida para la casa",monto: 200000},
    {id:"003",nombre:"Mama",descripcion:"Regalo a mi mama",monto: 20000},
    {id:"004",nombre:"Hermana",descripcion:"Mesada a mi hermana 15nov-30nov",monto: 140000}
  ]) 
  const cargar = ()=>{
    if(id != 0 && nombre !="" && descripcion !="" && monto != 0){
      setGastosList([...gastosList,{id:id,nombre:nombre,descripcion:descripcion,monto:monto}])
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
      <Nav sel4 ="sec" sel1= "sec"sel2 ="sel" sel3 ="sec" n2="n" home= "Home" ingresos="Ingresos" gastos="Gastos" register="Jolfre Gonzalez" sesion="Cerrar sesion"/>
      <ul className='home rt'>
        <li className='animate__animated animate__fadeInUp'>Id</li>
        <li className='animate__animated animate__fadeInDown'>Nombre</li>
        <li className='animate__animated animate__fadeInUp'>Descripcion</li>
        <li className='animate__animated animate__fadeInDown'>Monto</li>
      </ul>
      {gastosList.map((reg,i)=><Link className='p' to={`/GastoX/${i}`}><Gasto gastos={reg} id={i}/></Link>)}
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
          <button className='button' onClick={cargar}>Agregar Gasto</button>    
        </div>
        <Footer/>
    </div>
  )
}

export default Gastos
