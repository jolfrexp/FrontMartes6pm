import React from 'react'

function Ingreso({ingreso,id}) {
  return (
    <>
     <ul className='home rt'>
      <li>{id}</li>
      <li>{ingreso.descripcion}</li>
      <li>{ingreso.monto}</li>
      </ul> 
    </>
  )
}

export default Ingreso
