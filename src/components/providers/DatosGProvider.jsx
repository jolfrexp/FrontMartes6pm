import { createContext,useState } from "react"
let datosContex = createContext();
function DatosProvider({children}) {
    const [infoDatos,setInfoDatos] = useState(0)
  return (
    <datosContex.Provider value= {{infoDatos,setInfoDatos}}>
        {children}
    </datosContex.Provider>
  )
}
export {datosContex,DatosProvider}