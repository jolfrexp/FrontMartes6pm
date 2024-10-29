import React from 'react'
import { Link } from 'react-router-dom'
function Nav(props) {
  return (
    <>
    <nav>
      
      <ul>
        <li className={props.n4}>
       <Link className={props.sel4}  to="/"><p>EcoFin</p> </Link>
      </li>
        <li className={props.n1}>
          <Link className={props.sel1} to = "/Home"><p>{props.home}</p></Link>
        </li>
        <li className={props.n2}>
          <Link className={props.sel2} to="/Gastos"><p>{props.gastos}</p></Link>
        </li>
        <li className={props.n3}>
          <Link className={props.sel3} to="/Ingresos"><p>{props.ingresos}</p></Link>
        </li>
      </ul>
      <ul className='ul2'>
        <li>
          <Link className="ul1" to="/"><p>{props.sesion}</p></Link>
        </li>
        <li>
          <Link className='ul1'><p>{props.register}</p></Link>
        </li>
      </ul>
    </nav>
    </>
  )
}

export default Nav
