import React from 'react'
import { Link } from 'react-router-dom'
function Nav(props) {
  return (
    <>
    <nav>
      
      <ul>
        <li className={props.n4}>
       <Link className={props.sel4} to="/"><p>EcoFin</p> </Link>
      </li>
        <li className={props.n1}>
          <Link className={props.sel1} to = "/Home"><p>Home</p></Link>
        </li>
        <li className={props.n2}>
          <Link className={props.sel2} to="/Gastos"><p>Gastos</p></Link>
        </li>
        <li className={props.n3}>
          <Link className={props.sel3} to="/Ingresos"><p>Ingresos</p></Link>
        </li>
      </ul>
      <ul className='ul2'>
        <li>
          <Link className="ul1"><p>Inicio Sesion</p></Link>
        </li>
        <li>
          <Link className='ul1'><p>Registro</p></Link>
        </li>
      </ul>
    </nav>
    </>
  )
}

export default Nav
