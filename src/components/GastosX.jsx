import React from 'react'
import { useParams } from 'react-router-dom'
function GastosX() {
    let {id} = useParams()
  return (
    <div>
      <h1>Gastos id: {id}</h1>
    </div>
  )
}

export default GastosX
