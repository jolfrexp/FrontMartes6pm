import React, { useEffect, useRef } from 'react'
import logoM from '../assets/mail.svg'
import logoK from '../assets/key-fill.svg'
import logoU from '../assets/person-circle.svg'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
function Register({toggleRegister,toggleLogin}) {
  let usuarios = [
    {id:30,nombre:"Jolfre",correo:"jolfre@gmail.com",fechaRegistro:"09-10-24"},
    {id:43,nombre:"Andrea",correo:"Andrea@gmail.com",fechaRegistro:"04-02-23"},
    {id:54,nombre:"Jose",correo:"Jose@gmail.com",fechaRegistro:"03-02-23"}
]
usuarios.map((usuario,id)=>{
 console.log(usuario)
 console.log(id)
 console.log(usuario.id)
 console.log(usuario.correo)
 console.log(usuario.nombre)
 console.log(usuario.fechaRegistro)
})
  const miElementRef = useRef(null)
  let nombre = document.getElementById("nombre")
  let edad = document.getElementById("edad")
  let ciudad = document.getElementById("ciudad")
  let telefono = document.getElementById("telefono")
  let correo = document.getElementById("correo")
  let contraseña = document.getElementById("contraseña")
  const manejarSubmit = (e)=>{
    e.preventDefault()
    console.log("submit evitado")
    let objetoEnvioDatosUsuario={
      nombre: nombre.value,
      edad: edad.value,
      ciudad:ciudad.value,
      telefono: telefono.value,
      correo: correo.value,
      contraseña: contraseña.value
    }
    console.log(objetoEnvioDatosUsuario)
        Swal.fire({
          title: "Good job!",
          text: "You clicked the button",
          icon: 'success'
        })
  }
  const toggleLogin2 = () =>{
      toggleRegister()
      toggleLogin()
  }
  return (
    <div className='login-sidebar2 animate__animated animate__fadeInUp'>
      <h2>Registro</h2>
      <form onSubmit={manejarSubmit} className='formulario'>
        <div className="user">
          <label><img src={logoU} alt=""  />Nombre</label>
        </div><input type="text" id='nombre' placeholder='Name'required />
        <div className="age">
          <label>Edad</label>
        </div>
        <input type="number" placeholder='18' id='edad'/>
        <div className="phone">
          <label>Telefono</label>
        </div>
        <input type="text" placeholder='3211234322' id='telefono' />
        <div className="mail">
        <label><img src={logoM} alt="" /> Correo Electronico:</label>
        <div><input type="email" placeholder='Correo@Example.com' required id='correo'/></div>
        
        </div>
        <div className="key">
          <label><img src={logoK} alt="" /> Contraseña:</label>
          <div>
          <input type="password" placeholder='Contraseña' required id='contraseña'/></div>
        <div className="city">
          <label>Ciudad</label>
        </div>
        <input type="text" placeholder='Medellin' id='ciudad' />
        </div>
        <div className="botones">
        <button type='submit' className='button p2' ref={miElementRef} id='botonRegistro'>Registrar</button>
        <Link className='button p2' onClick={toggleRegister}>Cerrar</Link>
        <Link className='button p2' onClick={toggleLogin2}>Login</Link>
        </div>
        
      </form>
      
    </div>
  )
}

export default Register
