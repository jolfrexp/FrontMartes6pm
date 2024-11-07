import React from 'react'

function Factura({fac,id}) {
  return (
    <div>
     <ul className='home rt'>
      <li>{fac.id}</li>
      <li>{fac.fecha}</li>
      <li>{fac.monto}</li>
      </ul> 
    </div>
  )
}

export default Factura
