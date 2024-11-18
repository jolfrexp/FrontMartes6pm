import React from 'react'
import { Link } from 'react-router-dom'
function NotFound() {
  return (
    <div>
      <h1>Lo sentimos la pagina que buscas no existe!</h1>
      <button><Link className='p' to="Home">Volver al inicio</Link></button>
    </div>
  )
}

export default NotFound
