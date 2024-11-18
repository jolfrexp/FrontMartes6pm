import React from 'react'

function Factura({fac,id}) {
  return (
    <div>
     <ul className='home rt'>
      <li className='li'>{id+1}</li>
      <li className='li'>{fac.fecha}</li>
      <li className='li'>{fac.monto}</li>
      </ul> 
    </div>
  )
}

export default Factura
