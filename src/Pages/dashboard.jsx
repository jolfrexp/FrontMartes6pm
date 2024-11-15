import React, { useEffect, useState } from 'react'
import {GraphicD,GraphicE, GraphicF} from '../graficas/GraphicD'
import { UsuarioGet } from '../services/servicioUsuario'
import { Link, useParams } from 'react-router-dom'
import img1 from '../assets/person-circle.svg'
import img2 from '../assets/mail.svg'
import img3 from '../assets/key-fill.svg'
function Dashboard() {
    const [searchTerm,setSearchTerm] = useState('')
    let {id} = useParams()
    const [select,setSelect] = useState('')
    const [search,setSearch] = useState([''])
    const [users,setUsers] = useState([''])
    const [showUsuarios,setShowUsarios] = useState(false)
    const [showFinanciero,setShowFinancieros] = useState(false)
useEffect(()=>{
    async function fetchData() {
       try {
        const response = await UsuarioGet()
        setUsers(response)
        setSearch(response.map(p=>p.nombre))       
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
        setSelect('')
    }else if(id==2){
        setShowFinancieros(true)
        setShowUsarios(false)
        setSelect('')
    }else{
        setShowFinancieros(false)
        setShowUsarios(false)
        let i=0
        while(users.length > i){
            if(filteredUsers[(id-10)] == users[i].nombre){
                setSelect(users[i])
                i=users.length
            }
            else{
                i=i+1
            }
        }
    }
},[id])
const  filteredUsers = search.filter((s)=>s.toLowerCase().includes(searchTerm.toLowerCase()))
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
        {showUsuarios && 
        <main>
            <label>Busqueda por usuario</label>
            <input className='inputD MT' type="text" value={searchTerm} onChange={(e)=>(setSearchTerm(e.target.value))} placeholder='Usuario'/>
            {searchTerm &&
            <ul className='opciones'>
                {filteredUsers.length > 0 ?(filteredUsers.map((u,id)=>(<li className='dashboard' key={id}><Link to={`/Dashboard/1${id}`}>{u}</Link></li>))):(<li>No se encontraron usuarios</li>)}
            </ul>
            }
        <div className='DF'>        
            <div className="graficaUsuarios ML">
                <GraphicD valores={[1,users.length,3,4]} descripciones={[]}/>  
            </div>
                <div className={searchTerm ? "datos opc":"datos"}>
                    <h1>Usuarios</h1>
                <div className="dato MT DF"><p className='ML'>Usuarios Activos:</p><p>{users.length}</p></div>
                <div className="dato1 MT DF"><p className=''>Usuarios Inactivos:</p><p>1</p> </div>
                <div className="dato2 MT DF"><p className=''>Usuarios Femeninos:</p><p>3</p></div>
                <div className="dato3 MT DF"><p className=''>Usuarios Masculinos:</p><p>4</p> </div>
            </div>
        </div>
        <div className="DF">
            <div className='MT ML graficaUsuarios2'>
                <GraphicE />
            </div> 
            <div className="datos">
                <h1>Usuarios</h1>
            <div className="dato3 MT DF"><p className='ML'>Usuarios Esperados:</p><p>10</p></div>
            <div className="dato MT DF"><p className='ML'>Usuarios Activos:</p><p>{users.length}</p></div>
            </div> 
        </div>
        
        </main>
        
        }
        {showFinanciero && <div><GraphicF/></div>}
        {select && 
        <div className='DF User'>
            <div className="graficaUsuarios ML">
             <GraphicD valores={[18000,50000,32000]} descripciones={["Balance","Ingresos","Gastos"]}/>
            </div>
            <div className='userSelect animate__animated animate__fadeInDown'>
            <h1>User ID </h1>
            <h2>{select.id}</h2>
            {/* <div className='img'><img src={img1} alt="" /><img src={img2} alt="" /><img src={img3} alt="" /></div> */}
            <div className='flex'>
                <h4>Nombre:</h4>
                <h3>{select.nombre}</h3>    
            </div>
            <div className="flex">
                <h4>Correo:</h4>
                <h3>{select.correo}</h3>
            </div>
            <div className="flex2">
                <h4>Fecha de Registro:</h4>
                <h3>{select.fechaRegistro}</h3>
            </div>
            <div className="flex3">
                <h4>Contraseña:</h4>
                <h3 type ='password'>**********</h3>
            </div>
            <div className="flex">
                <h4>Gastos:</h4>
                <h3>32000</h3>
            </div>
            <div className="flex">
                <h4>Ingresos:</h4>
                <h3>50000</h3>
            </div>
            <div className="flex">
                <h4>Balance: </h4>
                <h3>18000</h3>
                <h4>+</h4>
            </div>
        </div>
        </div>
        
        }
    </div>
  )
}

export default Dashboard
