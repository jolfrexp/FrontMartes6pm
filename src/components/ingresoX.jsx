import React from 'react'
import { useParams } from 'react-router-dom'
function IngresoX() {
    let {id} = useParams()
  return (
    <div>
      <h1>Ingreso id: {id}</h1>
    </div>
  )
}

export default IngresoX
