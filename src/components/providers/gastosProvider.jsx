import { createContext,useState } from "react"
let gastosContex = createContext();
function GastosProvider({children}) {
    const [infoGastos,setInfoGastos] = useState([])
  return (
    <gastosContex.Provider value= {{infoGastos,setInfoGastos}}>
        {children}
    </gastosContex.Provider>
  )
}
export {gastosContex,GastosProvider}