import React from 'react'
import logo from '../assets/logo.png'
function Header(props) {
  return (
    <>
    <header className={props.class}>
      <div className="Content">
        <div className="contenedor_logo">
          <img src={logo} alt="" />
        </div>
        <div className='header_text'>
          <h1>EcoFin</h1>
          <p>Economia y finanzas en la mejor pagina</p>

        </div>
      </div>
        
        
    </header>
    </>
  )
}

export default Header
