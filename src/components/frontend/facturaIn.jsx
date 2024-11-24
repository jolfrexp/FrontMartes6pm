import React, { useContext, useEffect, useState } from 'react'
import { ingresoContext } from '../providers/ingresosProvider'
import { FacturaPost } from '../../services/serviciosFactura'
import { IngresoPost } from '../../services/servicesIngreso'
import {usuarioContext} from '../providers/usuarioProvider'
import { gastosContex } from '../providers/gastosProvider'
import { GastoPost } from '../../services/servicesGasto'
import '../../assets/css/frontend/facturas.css'
import IngresoIn from './ingresoIn'
import GastoIn from './gastoIn'
import Swal from 'sweetalert2'

function FacturaIn({toggleFactura}) {
  let {infoIngreso,setInfoIngreso} = useContext(ingresoContext)
  let {infoGastos,setInfoGastos} = useContext(gastosContex)  
  let {infoUsuario} = useContext(usuarioContext)

  const [showIngreso,setShowIngreso] = useState(false) 
  const [showGasto,setShowGasto] = useState(false)
  const [ingresos,setIngresos] = useState([])
  const [gastos,setGastos] = useState([])
  const [monto,setMonto] =useState(0.000)


  let dia = new Date().toISOString().split('T')[0]

  const deleteIng = (index)=>{
    Swal.fire({
      title: "Estas seguro?",
      text: "No se puede recuperar luego de que lo elimines",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Borrado!",
          text: "El ingreso se ha eliminado",
          icon: "success"
        });
        setInfoIngreso(infoIngreso.filter((d,i)=>i!= index))
      }
    });
    
  }
  const deleteGast = (index)=>{
    Swal.fire({
      title: "Estas seguro?",
      text: "No se puede recuperar luego de que lo elimines",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Borrado!",
          text: "El Gasto se ha eliminado",
          icon: "success"
        });
        setInfoGastos(infoGastos.filter((d,i)=>i!= index))
      }
    });
  }
  const FacturasPost =async()=>{
    console.log(infoGastos)
    console.log(infoIngreso)
    const response = await FacturaPost({"fecha":dia,"usuario_id":infoUsuario.id,"total":monto})
    console.log(response.id)
    console.log(ingresos)
    let i =0
    while(i<ingresos.length){
      ingresos[i].factura_id = response.id
      console.log(ingresos)
      const response2 = await IngresoPost(ingresos[i])
      console.log(response2)
      i = i + 1
    }
    i=0
    while(i<gastos.length){
      gastos[i].factura_id = response.id
      const response3 = await GastoPost(gastos[i])
      console.log(response3)
      i=i+1
    }
    toggleFactura()

    
  }
  const sumaMonto = (ingresos,gastos)=>{
    const totalGast = gastos.reduce((sum,item)=> sum + item.monto,0)
    const totalIng = ingresos.reduce((sum,item)=> sum + item.monto,0)
  
    setMonto(monto=>monto + totalIng)
    setMonto(monto=>monto - totalGast)
  }
  const toggleIngreso = ()=>{
    setShowIngreso(!showIngreso)
  }
  const toggleGasto =()=>{
    setShowGasto(!showGasto)
  }
  
  useEffect(()=>{
    console.log(infoIngreso[0])
    setIngresos(infoIngreso)
    console.log(infoGastos)
    setGastos(infoGastos)
    setMonto(0)
    sumaMonto(infoIngreso,infoGastos )
  },[infoIngreso,infoGastos])
  return (
    <div className='formularioF perfilF'>

      <h1>Ingreso de factura</h1>

      <h3>Fecha actual:{dia}</h3>

      <h3>Usuario: {infoUsuario.nombre}</h3>

      {ingresos.length != 0 ? 
        <div>
          <h1>Ingresos</h1>
          <h4>toca uno para eliminarlo</h4>
          <ul className='ulF'>
            {ingresos.map((item,index)=>(<li className='liF' key={index} onClick={()=>deleteIng(index)}>-{item.descripcion}</li>))}
          </ul>
        </div>
        :
        <div>Sin ingresos</div>}         
          {showIngreso ? <IngresoIn toggleIngreso={toggleIngreso}/>:<button onClick={toggleIngreso}>Ingreso</button>}
          {gastos.length != 0 ? 
         <div>
          <h1>Gastos</h1>
          <p>toca uno para eliminarlo</p>
          <ul className='ulF'>
            {gastos.map((item,index)=>(<li className='liF' key={index} onClick={()=>deleteGast(index)}>-{item.descripcion}</li>))}
          </ul>
         </div>
        :
        <div>Sin Gastos</div>} 
          {showGasto ? <GastoIn toggleGasto={toggleGasto} />:<button onClick={toggleGasto}>Gasto</button>}
        <h3>Monto: {monto}</h3>
        <div className="botones">
          <button className='button p' onClick={FacturasPost}>Registrar</button>
          <button className='button p' onClick={toggleFactura}>Cancelar</button>
      </div>
    </div>
  )
}
export default FacturaIn