import React,{useContext, useEffect, useState} from 'react'
import { usuarioContext } from '../providers/usuarioProvider'
import { useForm } from 'react-hook-form'
import { gastosContex } from '../providers/gastosProvider'
import { CategoriaGet } from '../../services/serviciosCategoria'
import { MDPGet } from '../../services/serviciosMetodoPagos'
function GastoIn({toggleGasto}) {
    let {infoGastos,setInfoGastos} = useContext(gastosContex)
    let {register,handleSubmit, formState:{errors}} = useForm()

    const [menuCategoria,setMenuCategoria] = useState(0)
    const [categorias,setCategorias] = useState([])
    const [categoriaS,setCategoriaS] = useState(0)
    const [menuMetodo,setMenuMetodo] = useState(0)
    const [metodos,setMetodos] = useState([])
    const [metodoS,setMetodoS] = useState(0)
    
    let onSubmited=(data)=>{
        data.metodo_id = metodoS
        data.categoria_id = categoriaS
        data.monto = parseInt(data.monto,10)
        data.factura_id = 0
        setInfoGastos([...infoGastos, data])
        toggleGasto()
    }

    const mostrarCat = ()=>{
        setMenuCategoria(!menuCategoria)
    }

    const mostrarMet = ()=>{
        setMenuMetodo(!menuMetodo)
    }

    const selecCat = (index)=>{
        setMenuCategoria(false)
        setCategoriaS(index)
    }

    const selecMet = (index)=>{
        setMenuMetodo(false)
        setMetodoS(index)
    }

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
  return (
    <div>
      <form className='formularioG animate__animated animate__zoomIn ' onSubmit={handleSubmit(onSubmited)}>
        <h1>Gasto</h1>
        <hr />
        <div>
            <div>Descripcion:</div>
            <input type="text" {...register('descripcion',{require:true})} placeholder='Example Description' required/>
        </div>
        <div>
            <div>Monto: </div>
            <input type="number" {...register('monto',{require:true})} placeholder='12.000' required/>
        </div>
        <div>
            <button type='button' onClick={mostrarCat}>Categoria</button>
            <ul className='ulF'>
                {menuCategoria !=0 && categorias.map((data,index)=>(<li className='liF2' onClick={()=>selecCat(index)} key={index}>{data.nombreCategoria}</li>))}
                {categoriaS != 0 ? <li className='liF2'>{`Categoria seleccionada: ${categorias[categoriaS].nombreCategoria}`}</li>:<li className='liF2'>Categoria seleccionada: Sin categoria</li>}
            </ul>
        </div>
        <div>
            <button type='button' onClick={mostrarMet}>Metodo de pago</button>
            <ul className='ulF'>
                {menuMetodo !=0 && metodos.map((data,index)=>(<li className='liF2' onClick={()=>selecMet(index)} key={index}>{data.nombreMetodo}</li>))}
                {metodoS !=0 ? <li className='liF2'>{`Metodo de pago seleccionado: ${metodos[metodoS].nombreMetodo}`}</li>:<li className='liF2'>Metodo de pago seleccionado: Sin Metodo de pago</li>}
            </ul>
        </div>
        <div className='botones'>
            <button className='button'>Agregar</button>
            <button className='button' onClick={toggleGasto}>Cancelar</button>  
        </div>
      </form>
    </div>
  )
}

export default GastoIn
