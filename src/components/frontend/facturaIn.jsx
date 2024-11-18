import React, { useContext, useEffect, useState } from 'react'
import { ingresoContext } from '../providers/ingresosProvider'
import IngresoIn from './ingresoIn'
import Swal from 'sweetalert2'

function FacturaIn({toggleFactura}) {
  
  const [ingresos,setIngresos] = useState([])
  const [gastos,setGastos] = useState('')
  const [showIngreso,setShowIngreso] = useState(false)
  const [showGasto,setShowGasto] = useState(false)
  let {infoIngreso,setInfoIngreso} = useContext(ingresoContext)
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
  const toggleIngreso = ()=>{
    setShowIngreso(!showIngreso)
  }
  useEffect(()=>{
    console.log(infoIngreso)
    setIngresos(infoIngreso)
  },[infoIngreso])
  return (
    <div>
         {ingresos.length != 0 ? 
         <div>
            <h1>Ingresos</h1>
            <p>toca uno para eliminarlo</p>
            <ul className='ulF'>
              {ingresos.map((item,index)=>(<li className='liF' key={index} onClick={()=>deleteIng(index)}>*{item.descripcion}</li>))}
            </ul>
         </div>
         :"Sin ingresos"} 
        {showIngreso && <IngresoIn toggleIngreso={toggleIngreso} dataR={infoIngreso}/>}
        <button onClick={toggleIngreso}>Ingreso</button>
        
          {gastos ?"hay gastos":"no hay gastos"}
        
          
          <button>Gasto</button>
        <div className="botones">
        <button className='button p'>Registrar</button>
        <button className='button p' onClick={toggleFactura}>Cancelar</button>
        </div>
    </div>
  )
}

export default FacturaIn
