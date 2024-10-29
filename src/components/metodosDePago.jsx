import React from 'react'
import { Link } from 'react-router-dom'
function MetodosDePago({toggleMetodo}) {
  return (
    <div className='login-sidebar4 animate__animated animate__fadeInUp'>
      <h2>Metodo de pago</h2>
      <form className='formulario'>
        <div className="user">
          <label>Nombre</label>
        </div><input type="text" placeholder='Name'required />
        <div className="age">
          <label>Descripcion</label>
        </div>
        <input type="text" placeholder='Descripcion'/>
        <div className="botones">
        <Link className='button p2'>Registrar</Link>
        <Link className='button p2' onClick={toggleMetodo}>Cerrar</Link>
        </div>
        
      </form>
      
    </div>
  )
}

export default MetodosDePago
