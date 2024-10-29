import React, { useEffect, useState } from 'react'
import logoM from '../assets/mail.svg'
import logoK from '../assets/key-fill.svg'
import { Link } from 'react-router-dom'

function Login({toggleLogin,toggleRegister}) {
  const toggleRegister2 = () =>{
      toggleRegister()
      toggleLogin()
  }
  const [dataVisible,setDatavisible] = useState(false)
  const[correo,setCorreo] = useState("")
  const[password,setPassword] = useState("")
  useEffect (()=>{
    if(correo!=""&& password!=""){
      setDatavisible(true)
    }else{
      setDatavisible(false)
    }
  },[correo,password])

  return (
    <div className='login-sidebar animate__animated animate__fadeInUp'>
      <h2>Iniciar sesion</h2>
      <form className='formulario'>
        <div className="mail">
        <label><img src={logoM} alt="" /> Correo Electronico:</label>
        <div><input type="email" placeholder='Correo@Example.com' id='email' value={correo} onChange={(e)=>{setCorreo(e.target.value)}} required/></div>
        
        </div>
        <div className="key">
          <label><img src={logoK} alt="" /> Contraseña:</label>
          <div><input type="password" placeholder='Contraseña' id='Password' value={password} onChange={(e)=>{setPassword(e.target.value)}} required /></div>
          
        </div>
        <div className="botones">
        {dataVisible && <Link className='button p2' to="/Home">Ingresar</Link>}
        <Link className='button p2' onClick={toggleLogin}>Cerrar</Link>
        <Link className='button p2' onClick={toggleRegister2} >Registro</Link>
        </div>
        
      </form>
      
    </div>
  )
}

export default Login
