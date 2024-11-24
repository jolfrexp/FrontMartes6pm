import '../../assets/css/frontend/header.css'
import logo from '../../assets/img/logo.png'
import React from 'react'

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