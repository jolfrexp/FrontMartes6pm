import React from 'react'
import logoM from '../assets/mail.svg'
import logoK from '../assets/key-fill.svg'
import logoU from '../assets/person-circle.svg'
import { Link } from 'react-router-dom'
function Register({toggleRegister,toggleLogin}) {
  const toggleLogin2 = () =>{
      toggleRegister()
      toggleLogin()
  }
  return (
    <div className='login-sidebar2 animate__animated animate__fadeInUp'>
      <h2>Registro</h2>
      <form className='formulario'>
        <div className="user">
          <label><img src={logoU} alt="" />Nombre</label>
        </div><input type="text" placeholder='Name'required />
        <div className="age">
          <label>Edad</label>
        </div>
        <input type="number" placeholder='18'/>
        <div className="phone">
          <label>Telefono</label>
        </div>
        <input type="text" placeholder='3211234322' />
        <div className="mail">
        <label><img src={logoM} alt="" /> Correo Electronico:</label>
        <div><input type="email" placeholder='Correo@Example.com' required/></div>
        
        </div>
        <div className="key">
          <label><img src={logoK} alt="" /> Contraseña:</label>
          <div>
          <input type="password" placeholder='Contraseña' required /></div>
        <div className="city">
          <label>Ciudad</label>
        </div>
        <input type="text" placeholder='Medellin' />
        </div>
        <div className="botones">
        <Link className='button p2'>Registrar</Link>
        <Link className='button p2' onClick={toggleRegister}>Cerrar</Link>
        <Link className='button p2' onClick={toggleLogin2}>Login</Link>
        </div>
        
      </form>
      
    </div>
  )
}

export default Register
