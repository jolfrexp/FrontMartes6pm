import React, { useEffect, useState } from 'react'
import {GraphicD,GraphicE, GraphicF} from '../graficas/GraphicD'
import { UsuarioGet } from '../services/servicioUsuario'
import { Link, useParams } from 'react-router-dom'
function Dashboard() {
    let {id} = useParams()
    const [user,setUser] = useState(0)
    const[showUsuarios,setShowUsarios] = useState(false)
    const[showFinanciero,setShowFinancieros] = useState(false)
const toggleUsuarios = ()=>{
    setShowUsarios(!showUsuarios)

}
const toggleFinancieros = ()=>{
    setShowFinancieros(!showFinanciero)
}
useEffect(()=>{
    async function fetchData() {
       try {
        const response = await UsuarioGet()
        console.log(response.length)
        setUser(response)
    } catch (error) {
        console.error(error)
        
    } 
    }
    fetchData()
},[])
useEffect(()=>{
    if(id==1){
        setShowUsarios(true)
        setShowFinancieros(false)
    }else{
        setShowFinancieros(true)
        setShowUsarios(false)
    }
},[id])
  return (
    <div className='dashboard'>
        <header>
            <h1>Dashboard</h1>
        </header>
        <nav className='navD'>
            <ul>
                <li><Link className='det' to="/Dashboard/1">Usuarios</Link></li>
                <li><Link className='det' to='/Dashboard/2'>Financiero</Link></li>
                <li><a className='det' href='/'>Logout</a></li>
            </ul>
        </nav>
        {showUsuarios && <main>
        <div className='DF'>
            <div className="graficaUsuarios ML">
                <GraphicD activos={user.length} inactivos={1} femenino={3} masculino={4}/>  
            </div>
                <div className='datos'>
                    <h1>Usuarios</h1>
                <div className="dato MT DF"><p className='ML'>Usuarios Activos:</p><p>{user.length}</p></div>
                <div className="dato1 MT DF"><p className='ML'>Usuarios Inactivos:</p><p>1</p> </div>
                <div className="dato2 MT DF"><p className='ML'>Usuarios Femeninos:</p><p>3</p></div>
                <div className="dato3 MT DF"><p className='ML'>Usuarios Masculinos:</p><p>4</p> </div>
            </div>
        </div>
        <div className="DF">
            <div className='MT ML graficaUsuarios2'>
                <GraphicE />
            </div> 
            <div className="datos">
                <h1>Usuarios</h1>
            <div className="dato3 MT DF"><p className='ML'>Usuarios Esperados:</p><p>10</p></div>
            <div className="dato MT DF"><p className='ML'>Usuarios Activos:</p><p>{user.length}</p></div>
            </div> 
        </div>
        </main>}
        {showFinanciero && <div><GraphicF/></div>}
    </div>
  )
}

export default Dashboard
