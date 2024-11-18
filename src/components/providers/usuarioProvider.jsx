import { createContext,useState } from "react"
let usuarioContext = createContext();
function UsuarioProvider({children}) {
    let [infoUsuario,setInfoUsuario] = useState(null)
  return (
    <usuarioContext.Provider value= {{infoUsuario,setInfoUsuario}}>
        {children}
    </usuarioContext.Provider>
  )
}

export {usuarioContext,UsuarioProvider}