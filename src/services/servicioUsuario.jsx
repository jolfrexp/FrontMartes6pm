import axios from 'axios'


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
async function userLogin(datos) {
  try{
    const response = await axios.post("http://127.0.0.1:8000/login",datos)
    console.log(response.data)
    return response.data
  }catch(e){
    console.error(e)
    throw e
  }
  
}


export {UsuarioGet,UsuarioPost,userLogin}

