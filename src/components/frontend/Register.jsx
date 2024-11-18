import React from 'react'
import Swal from 'sweetalert2'
import { useForm } from 'react-hook-form'
import { UsuarioPost } from '../../services/servicioUsuario'
function Register({toggleRegister,toggleLogin}){
  let {register,handleSubmit, formState:{errors}} = useForm() 
  let onSubmited= async (data)=>{
    data.edad = parseInt(data.edad,10)
    data.fechaRegistro = new Date().toISOString().split('T')[0]
    try{
      const response = await UsuarioPost(data) 
      console.log(response)
      toggleRegister()
      Swal.fire({
        title: "Usuario Registrado",
        text: " Bienvenid@!: " + data.nombre,
        icon: 'success'})
    }catch(e){
      console.error(e)
    }
  }
  const toggleLogin2 = () =>{
      toggleRegister()
      toggleLogin()
  }
  return (
    <div className='Inicio '>
      <h2>Registro</h2>
      <form className='formulario' onSubmit={handleSubmit(onSubmited)}>
        <div className="user">
          <label>Nombre</label>
        </div><input type="text" id='nombre' {...register('nombre',{require:true})} placeholder='Name'required />
        <div className="age">
          <label>Edad</label>
        </div>
        <input type="number" placeholder='18' {...register('edad',{require:true})} id='edad' required/>
        <div className="phone">
          <label>Telefono</label>
        </div>
        <input type="text" placeholder='3211234322' {...register('telefono',{require:true})} id='telefono' required />
        <div className="mail">
        <label> Correo Electronico:</label>
        <div><input type="email" placeholder='Correo@Example.com' {...register('correo',{require:true})} required id='correo'/></div>
        
        </div>
        <div className="key">
          <label>Contraseña:</label>
          <div>
          <input type="password" placeholder='Contraseña' {...register('contrasena',{require:true})} required id='contraseña'/></div>
        <div className="city">
          <label>Ciudad</label>
        </div>
        <input type="text" placeholder='Medellin' id='ciudad' {...register('ciudad',{require:true})} required />
        </div>
        <div className="botones">
        <button type='submit' className='button p'  id='botonRegistro'>Registrar</button>
        <button className='button p' onClick={toggleRegister}>Cerrar</button>
        <button className='button p' onClick={toggleLogin2}>Login</button>
        </div>
        
      </form>
      
    </div>
  )
}

export default Register
