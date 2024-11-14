import React from 'react'

function Ingreso({ingreso,id}) {
  return (
    <>
     <ul className='home rt'>
      <li className='li'>{id+1}</li>
      <li className='li'>{ingreso.descripcion}</li>
      <li className='li'>{ingreso.monto}</li>
      </ul> 
    </>
  )
}

export default Ingreso
