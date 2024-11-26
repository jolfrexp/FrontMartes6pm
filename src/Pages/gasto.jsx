import React from 'react'

function Gasto({gastos,id}) {
  
  return (
    <div>
     <ul className='home rt'>
      <li className='li animate__animated animate__fadeInDown'>{gastos.id}</li>
      <li className='li animate__animated animate__fadeInUp'>{gastos.descripcion}</li>
      <li className='li animate__animated animate__fadeInDown'>{gastos.monto}</li>
      </ul> 
    </div>
  )
}
export default Gasto