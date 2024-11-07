import axios from 'axios'
import React from 'react'

function serviciosUsuario() {
  const buscarUsuario = async =>{}
     async function buscarUsuario() {
      //1.-Pa onde voy / url del servicio
      const URL = "http://127.0.0.1:8000/usuario"
      //2.-A hacer que ome/config de peticion
      let peticion = {
        method:"GET"
      }
      //3.-Vaya ps ome/consuma el api
      let respuestaInicial= await axios.get(URL)
      let respuestaFinal = await respuestaInicial.json()
      console.log(respuestaFinal)

    }
  return respuestaFinal
}

export default serviciosUsuario
