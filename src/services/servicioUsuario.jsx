import axios from 'axios'
import React from 'react'

async function UsuarioGet() {
  try{
    const response = await axios.get("http://127.0.0.1:8000/usuario")
    return response.data
  }catch(e){
    console.error(e)
    throw e
  }
}
async function UsuarioPost(datos) {
  try{
    const response = await axios.post("http://127.0.0.1:8000/usuario",datos)
    return response.data
  }catch(e){
    console.error(e)
    throw e
  }
  
}

export {UsuarioGet,UsuarioPost}

