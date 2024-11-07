import React from 'react'
import { Link } from 'react-router-dom'

function Categoria({toggleCategoria}) {
  return (
    <div className='login-sidebar3 animate__animated animate__fadeInUp'>
      <h2>Categoria</h2>
      <form className='formulario'>
        <div className="user">
          <label>Nombre</label>
        </div><input type="text" placeholder='Name'required />
        <div className="age">
          <label>Descripcion</label>
        </div>
        <input type="text" placeholder='Descripcion'/>
        <div className="phone">
        <label>fotoicono (Url)</label>
        </div>
        <input type="text" placeholder='https://imagen1.com' />
        <div className="botones">
        <button className='button p'>Agregar</button>
        <button className='button p' onClick={toggleCategoria}>Cerrar</button>
        </div>
        
      </form>
      
    </div>
  )
}

export default Categoria
