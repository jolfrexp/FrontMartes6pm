import React from 'react'
import { Link } from 'react-router-dom'
function Nav(props) {
  return (
    <>
    <nav className={props.class}>
      
      <ul>
        <li className={props.n4}>
       <Link className={props.sel4}  to="/"><p>{props.ecofin}</p> </Link>
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
        <li className={props.n5}>
          <Link className={props.sel5}to="/Facturas"><p>{props.facturas}</p></Link>
        </li>
      </ul>
        <ul className='ul2'>
          <li>
            <button className='button-perfil' onClick={props.togglePerfil}><p>{props.register}</p></button>
          </li>
        </ul>
    </nav>
    </>
  )
}

export default Nav
