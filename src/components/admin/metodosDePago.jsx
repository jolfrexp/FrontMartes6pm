import { MDPPost } from '../../services/serviciosMetodoPagos'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'
import React from 'react'
function MetodosDePago({toggleMetodo}) {
  let {register,handleSubmit, formState:{errors}} = useForm() 
  let onSubmited=async(data)=>{
    try{
        const datos = await MDPPost(data)
        console.log(datos)
        Swal.fire({
          title: "Metodo de pago agregado",
          text: datos.nombreMetodo,
          icon: 'success'})
        toggleMetodo()
      }catch(e){
        console.error(e)
      }  
      
  } 
  return (
    <div className='login-sidebar4 animate__animated animate__fadeInUp'>
      <h2>Metodo de pago</h2>
      <form className='formulario' onSubmit={handleSubmit(onSubmited)}>
        <div className="user">
          <label>Nombre</label>
        </div>
        <input type="text" {...register('nombreMetodo',{require:true})} placeholder='Name'required />
        <div className="age">
          <label>Descripcion</label>
        </div>
        <input type="text" {...register('descripcion',{require:true})} placeholder='Descripcion'/>
        <div className="botones">
          <button className='button p'>Registrar</button>
          <button className='button p' onClick={toggleMetodo}>Cerrar</button>
        </div>
      </form>
    </div>
  )
}
export default MetodosDePago