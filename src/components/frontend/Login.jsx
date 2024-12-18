import { usuarioContext } from '../providers/usuarioProvider.jsx'
import { userLogin } from '../../services/servicioUsuario.jsx'
import React, { useContext,useEffect, useState } from 'react'
import '../../assets/css/frontend/loginAndRegister.css'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'

function Login({toggleLogin,toggleRegister,onLogin}) {

  let navigate = useNavigate()

  let {infoUsuario,setInfoUsuario} = useContext(usuarioContext)

  let {register,handleSubmit, formState:{errors}} = useForm()  

  const [dataVisible,setDatavisible] = useState(false)
  const[password,setPassword] = useState("")
  const[correo,setCorreo] = useState("")

  useEffect(()=>{if(infoUsuario != null){
    
    if(infoUsuario.correo == "jolfre@gmail.com"){
      Swal.fire({
        title: "Sesion iniciada",
        text: " Bienvenido Admin: " + infoUsuario.nombre,
        icon: 'success',
        timer:1000,
      showConfirmButton:false})
      onLogin()
        navigate("/Dashboard/1")
    }
    else if(infoUsuario.nombre != "R"){
      Swal.fire({
        title: "Sesion iniciada",
        text: " Bienvenid@: " + infoUsuario.nombre,
        icon: 'success'})
        onLogin()
        navigate("/Home")

  }else{
    Swal.fire({
      title: "Error",
      text: "Las credenciales no son correctas",
    })
  }
}},[infoUsuario])
let onSubmited=async(data)=>{
  try{
      const datos = await userLogin(data)
      setInfoUsuario(datos)
    }catch(e){
      console.error(e)
    }  
    
}
  const toggleRegister2 = () =>{
      toggleRegister()
      toggleLogin()
  }

  useEffect (()=>{
    if(correo!=""&& password!=""){
      setDatavisible(true)
    }else{
      setDatavisible(false)
    }
  },[correo,password])

  return (
      <div className='Inicio'>
        <h1>Login</h1>
        <form className='formulario' onSubmit={handleSubmit(onSubmited)}>
                <div className="mail">
                  <label>Correo Electronico:</label>
                <div>
                  <input type="email" {...register('user',{require:true})} placeholder='Correo@Example.com' id='email' value={correo} onChange={(e)=>{setCorreo(e.target.value)}} required/></div>
                  </div>
                <div className="key">
                  <label>Contraseña:</label>
                <div>
                  <input type="password" {...register('password',{require:true})} placeholder='Contraseña' id='Password' value={password} onChange={(e)=>{setPassword(e.target.value)}} required /></div>
                </div>
        <div className="botones">
          {dataVisible && <button className='button p'>Ingresar</button>}
          <button className='button p' onClick={toggleLogin}>Cerrar</button>
          <button className='button p' onClick={toggleRegister2} >Registro</button>
        </div>
        </form>
        </div>    
  )
}
export default Login