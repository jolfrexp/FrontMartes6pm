import { usuarioContext } from '../providers/usuarioProvider'
import img1 from '../../assets/img/person-circle.svg'
import img3 from '../../assets/img/key-fill.svg'
import img2 from '../../assets/img/mail.svg'
import '../../assets/css/frontend/user.css'
import React, { useContext } from 'react'

function User({togglePerfil,onLogin,ingresos,gastos,balance}){
    let {infoUsuario} = useContext(usuarioContext)
  return (
    <>  
        <div className='home perfil animate__animated animate__fadeInRight'>
            <h1>User ID </h1>
            <h2>{infoUsuario.id}</h2>
            <div className='img'>
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
            </div>
            <div className='flex'>
                <h4>Nombre:</h4>
                <h3>{infoUsuario.nombre}</h3>    
            </div>
            <div className="flex">
                <h4>Correo:</h4>
                <h3>{infoUsuario.correo}</h3>
            </div>
            <div className="flex2">
                <h4>Fecha de Registro:</h4>
                <h3>{infoUsuario.fechaRegistro}</h3>
            </div>
            <div className="flex3">
                <h4>Contraseña:</h4>
                <h3 type ='password'>**********</h3>
            </div>
            <div className="flex">
                <h4>Gastos:</h4>
                <h3>{gastos}</h3>
            </div>
            <div className="flex">
                <h4>Ingresos:</h4>
                <h3>{ingresos}</h3>
            </div>
            <div className="flex">
                <h4>Balance: </h4>
                <h3>{balance}</h3>
            </div>

            <div className="botones mt">
                <button onClick={togglePerfil} className='button p2'>Cerrar</button>
                <button onClick={onLogin} className='button p2'><a href="/Home">LogOut</a></button>
            </div> 
        </div>
    </>
  )
}
export default User