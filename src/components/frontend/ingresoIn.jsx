import React,{useContext, useEffect, useState} from 'react'
import { usuarioContext } from '../providers/usuarioProvider'
import { useForm } from 'react-hook-form'
import { ingresoContext } from '../providers/ingresosProvider'
import { CategoriaGet } from '../../services/serviciosCategoria'
import { MDPGet } from '../../services/serviciosMetodoPagos'
function IngresoIn({toggleIngreso}) {
    const [categorias,setCategorias] = useState('')
    const [metodos,setMetodos] = useState('')
    const [categoriaS,setCategoriaS] = useState(null)
    const [metodoS,setMetodoS] = useState(null)
    useEffect(()=>{
        const getCategoria = async()=>{
            try {
                const response = await CategoriaGet()
                setCategorias(response)
            } catch (e) {
                console.error(e)
            }
        }
        const getMetodo = async()=>{
            try {
                const response = await MDPGet()
                setMetodos(response)
            } catch (e) {
                console.error(e)
            }
        }
        getCategoria()
        getMetodo()
    },[])
    useEffect(()=>{
        console.log(categorias)
        console.log(metodos)
    },[categorias,metodos])
    
    const [menuCategoria,setMenuCategoria] = useState(false)
    const [menuMetodo,setMenuMetodo] = useState(false)
    const mostrarCat = ()=>{
        setMenuCategoria(!menuCategoria)
    }
    const mostrarMet = ()=>{
        setMenuMetodo(!menuMetodo)
    }
    const selecCat = (index)=>{
        setMenuCategoria(false)
        setCategoriaS(index)
        console.log(index)
    }
    const selecMet = (index)=>{
        console.log(index)
        setMenuMetodo(false)
        setMetodoS(index)
    }

    let {infoUsuario} = useContext(usuarioContext)
    let {infoIngreso,setInfoIngreso} = useContext(ingresoContext)
    let {register,handleSubmit, formState:{errors}} = useForm()
    let onSubmited=(data)=>{
        setInfoIngreso([...infoIngreso, data])
        toggleIngreso()
    }
  return (
    <div>
      <form className='formulario' onSubmit={handleSubmit(onSubmited)}>
        <div>
            <label>Descripcion: </label>
            <input type="text" {...register('descripcion',{require:true})} placeholder='Example Description' required/>
        </div>
        <div>
            <label>Monto: </label>
            <input type="number" {...register('monto',{require:true})} placeholder='12.000' required/>
        </div>
        <div>
            <button type='button' onClick={mostrarCat}>Categoria</button>
            <ul>
                {menuCategoria && categorias.map((data,index)=>(<li onClick={()=>selecCat(index)} key={index}>{data.nombreCategoria}</li>))}
                {categoriaS && <li>{`Categoria seleccionada: ${categorias[categoriaS].nombreCategoria}`}</li>}
                <input type="number" {...register('categoria_id',{require:true})} value={categoriaS} required/>
            </ul>
        </div>
        <div>
            <button type='button' onClick={mostrarMet}>Metodo de pago</button>
            <ul>
                {menuMetodo && metodos.map((data,index)=>(<li onClick={()=>selecMet(index)} key={index}>{data.nombreMetodo}</li>))}
                {metodoS && <li>{`Metodo de pago seleccionado: ${metodos[metodoS].nombreMetodo}`}</li>}
                <input type="number" {...register('metodo_id',{require:true})} value={metodoS} required />
            </ul>
        </div>
        <div className='botones'>
            <button className='button'>Agregar</button>
            <button className='button' onClick={toggleIngreso}>Cancelar</button>  
        </div>
      </form>
    </div>
  )
}

export default IngresoIn
