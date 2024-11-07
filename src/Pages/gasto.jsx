import React from 'react'

function Gasto({gastos,id}) {
  
  return (
    <div>
     <ul className='home rt'>
      <li>{id}</li>
      <li>{gastos.descripcion}</li>
      <li>{gastos.monto}</li>
      </ul> 
    </div>
  )
}

export default Gasto
