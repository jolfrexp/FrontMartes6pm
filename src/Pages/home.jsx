import React, { useState } from 'react'
import Header from '../components/header'
import Nav from '../components/nav'
import Footer from '../components/footer'
import Graphic from '../components/Graphic'
import { Link } from 'react-router-dom'
import Categoria from '../components/categoria'
import MetodosDePago from '../components/metodosDePago'
function Home() {
  const [showCategoria,setShowCategoria] = useState(false)
  const [showMetodoDePago,setShowMetodoDePago] =useState(false)
  const toggleCategoria = () =>{
    setShowCategoria(!showCategoria)
  }
  const toggleMetodo = ()=>{
    setShowMetodoDePago(!showMetodoDePago)
  }
  const ingresos = 610512;
  const gastos = 482343;
  const balance = ingresos - gastos;
  return (
    <div className='home'>
      <Header/>
      <Nav sel4="sec" sel1 ="sel" sel2 ="sec" sel3 ="sec" n1="n" sesion="Cerrar sesion" register= "Jolfre gonzalez"
      ingresos = "Ingresos" gastos= "Gastos" home="Home"/>
      <h1 className='p'>Balance general</h1>
      <main className='animate__animated animate__fadeInUp p'>
        <Graphic ingresos={ingresos} gastos={gastos} balance={balance}/>
      </main> 
      {showCategoria || showMetodoDePago ? "" :<div className="botones">
        <Link className='button p' to="/Gastos">Agregar Gasto</Link>
        <Link className='button p' to="/Ingresos">Agregar Ingreso</Link>
        <Link className='button p' onClick={toggleCategoria}>Agregar Categoria</Link>
        <Link className='button p' onClick={toggleMetodo}>Agregar Metodo de pago</Link>
        </div>}
      {showCategoria ? <div className="categoria"> <Categoria toggleCategoria={toggleCategoria}/></div> :""}
      {showMetodoDePago ? <div className="MDP"> <MetodosDePago toggleMetodo={toggleMetodo}/></div> :""}
      <Footer/>
    </div>
  )
}

export default Home
