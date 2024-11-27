import React from 'react'

function Ingreso({ingreso,id}) {
  return (
    <>
     <ul className='home rt'>
      <li className='li animate__animated animate__fadeInLeft'>{id+1}</li>
      <li className='li animate__animated animate__fadeInDown'>{ingreso.descripcion}</li>
      <li className='li animate__animated animate__fadeInRight'>{ingreso.monto}</li>
      </ul> 
    </>
  )
}
export default Ingreso