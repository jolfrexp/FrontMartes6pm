import React from 'react'
import { CategoriaPost } from '../services/serviciosCategoria'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'
function Categoria({toggleCategoria}) {
  let {register,handleSubmit, formState:{errors}} = useForm() 
  let onSubmited=async(data)=>{
    try{
        const datos = await CategoriaPost(data)
        console.log(datos)
        Swal.fire({
          title: "Categoria agregada",
          text: datos.nombreCategoria,
          icon: 'success'})
        toggleCategoria()
      }catch(e){
        console.error(e)
      }  
      
  } 
  return (
    <div className='login-sidebar3 animate__animated animate__fadeInUp'>
      <h2>Categoria</h2>
      <form className='formulario' onSubmit={handleSubmit(onSubmited)}>
        <div className="user">
          <label>Nombre</label>
        </div><input type="text" {...register('nombreCategoria',{require:true})} placeholder='Name'required />
        <div className="age">
          <label>Descripcion</label>
        </div>
        <input type="text" {...register('descripcion',{require:true})} placeholder='Descripcion'/>
        <div className="phone">
        <label>fotoicono (Url)</label>
        </div>
        <input type="text" {...register('fotoicono',{require:true})} placeholder='https://imagen1.com' />
        <div className="botones">
        <button className='button p'>Agregar</button>
        <button className='button p' onClick={toggleCategoria}>Cerrar</button>
        </div>
        
      </form>
      
    </div>
  )
}

export default Categoria
