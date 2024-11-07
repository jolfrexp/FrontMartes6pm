import React, { useContext,useEffect, useState } from 'react'
import logoM from '../assets/mail.svg'
import logoK from '../assets/key-fill.svg'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'
import { UsuarioGet } from '../services/servicioUsuario'
import { usuarioContext } from './usuarioProvider.jsx'
import { useNavigate } from 'react-router-dom'

function Login({toggleLogin,toggleRegister}) {
  let navigate = useNavigate()
  const [datosObtenidos,setDatosObtenidos] = useState({})
  let {setInfoUsuario} = useContext(usuarioContext)
  let {register,handleSubmit, formState:{errors}} = useForm()     
useEffect(()=>{
  const fetchDatos= async ()=>{
    try{
      const datos = await UsuarioGet()
      setDatosObtenidos(datos)
    }catch(e){
      console.error(e)
    }  
  }
    fetchDatos()
},[])
let onSubmited=(data)=>{
    let log = false
    let i=0
    while(i<datosObtenidos.length){
      if(data.correo == datosObtenidos[i].correo){
        if(data.contrasena == datosObtenidos[i].contrasena){
          log = true
        }
        if(log){
          setInfoUsuario(datosObtenidos[i])
          Swal.fire({
            title: "Sesion iniciada",
            text: " Bienvenido/a: " + datosObtenidos[i].nombre,
            icon: 'success'})
        navigate("/Home")
        }else{
          Swal.fire({
            title: datosObtenidos[i].nombre,
            text: "Tu contraseña no es la correcta,por favor vuelve a intentar",
            icon: "error"
      })
    }
      }
      i++
    }
    
}
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
      <form className='formulario' onSubmit={handleSubmit(onSubmited)}>
        <div className="mail">
        <label><img src={logoM} alt="" /> Correo Electronico:</label>
        <div><input type="email" {...register('correo',{require:true})} placeholder='Correo@Example.com' id='email' value={correo} onChange={(e)=>{setCorreo(e.target.value)}} required/></div>
        
        </div>
        <div className="key">
          <label><img src={logoK} alt="" /> Contraseña:</label>
          <div><input type="password" {...register('contrasena',{require:true})} placeholder='Contraseña' id='Password' value={password} onChange={(e)=>{setPassword(e.target.value)}} required /></div>
          
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
