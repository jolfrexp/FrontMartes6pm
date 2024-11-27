import { createContext,useState } from "react"
let datosContex = createContext();
function DatosProvider({children}) {
    const [infoDatos,setInfoDatos] = useState([{
      id: 0,
      monto: 0,
      descripcion: "string",
      categoria_id: 0,
      metodo_id: 0,
      factura_id: 0
    }])
    const [infoDatos2,setInfoDatos2]= useState([{
      id: 0,
      monto: 0,
      descripcion: "string",
      categoria_id: 0,
      metodo_id: 0,
      factura_id: 0
    }])
  return (
    <datosContex.Provider value= {{infoDatos,setInfoDatos,infoDatos2,setInfoDatos2}}>
        {children}
    </datosContex.Provider>
  )
}
export {datosContex,DatosProvider}