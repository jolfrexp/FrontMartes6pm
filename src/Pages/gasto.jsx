import React from 'react'

function Gasto({gastos,id}) {
  
  return (
    <div>
     <ul className='home rt'>
      <li className='li'>{gastos.id}</li>
      <li className='li'>{gastos.descripcion}</li>
      <li className='li'>{gastos.monto}</li>
      </ul> 
    </div>
  )
}

export default Gasto
