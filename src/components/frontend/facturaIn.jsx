import React, { useContext, useEffect, useState } from 'react'
import { ingresoContext } from '../providers/ingresosProvider'
import {usuarioContext} from '../providers/usuarioProvider'
import { gastosContex } from '../providers/gastosProvider'
import { FacturaPost } from '../../services/serviciosFactura'
import IngresoIn from './ingresoIn'
import Swal from 'sweetalert2'
import GastoIn from './gastoIn'

function FacturaIn({toggleFactura}) {
  const [infoFactura,setInfoFactura] = useState([])
  const [monto,setMonto] =useState(0.000)
  const [ingresos,setIngresos] = useState([])
  const [gastos,setGastos] = useState([])
  const [showIngreso,setShowIngreso] = useState(false)
  const [showGasto,setShowGasto] = useState(false)
  let {infoUsuario} = useContext(usuarioContext)
  let {infoIngreso,setInfoIngreso} = useContext(ingresoContext)
  let {infoGastos,setInfoGastos} = useContext(gastosContex)
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
  const toggleIngreso = ()=>{
    setShowIngreso(!showIngreso)
  }
  const toggleGasto =()=>{
    setShowGasto(!showGasto)
  }
  const sumaMonto = (ingresos,gastos)=>{
    const totalGast = gastos.reduce((sum,item)=> sum + item.monto,0)
    const totalIng = ingresos.reduce((sum,item)=> sum + item.monto,0)
  
    setMonto(monto=>monto + totalIng)
    setMonto(monto=>monto - totalGast)
  }

  useEffect(()=>{
    console.log(infoIngreso[0])
    setIngresos(infoIngreso)
    console.log(infoGastos)
    setGastos(infoGastos)
    setMonto(0)
    sumaMonto(infoIngreso,infoGastos )
  },[infoIngreso,infoGastos])
  const FacturasPost =async()=>{
    console.log(infoGastos)
    console.log(infoIngreso)
    await FacturaPost({"fecha":dia,"usuario_id":infoUsuario.id,"total":monto},ingresos,infoGastos)

  }
  return (
    <div className='formularioF perfil'>
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
         :<div>Sin ingresos</div>} 
          {showIngreso ? <IngresoIn toggleIngreso={toggleIngreso}/>:<button onClick={toggleIngreso}>Ingreso</button>}
        
          {gastos.length != 0 ? 
         <div>
            <h1>Gastos</h1>
            <p>toca uno para eliminarlo</p>
            <ul className='ulF'>
              {gastos.map((item,index)=>(<li className='liF' key={index} onClick={()=>deleteGast(index)}>-{item.descripcion}</li>))}
            </ul>
         </div>
         :<div>Sin Gastos</div>} 
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
