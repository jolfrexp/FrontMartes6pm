import React from 'react'

function Factura({fac,id}) {
  return (
    <div>
     <ul className='home rt'>
      <li className='li'>{fac.id}</li>
      <li className='li'>{fac.fecha}</li>
      <li className='li'>{fac.total}</li>
      </ul> 
    </div>
  )
}
export default Factura