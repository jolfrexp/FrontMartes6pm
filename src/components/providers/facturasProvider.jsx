import React, { createContext, useState } from 'react'
let facturaContext = createContext()
function FacturaProvider({children}) {
    let [infoFactura,setInfoFactura] = useState([])
    return (
        <facturaContext.Provider value= {{infoFactura,setInfoFactura}}>
            {children}
        </facturaContext.Provider>
    )
}
export {facturaContext,FacturaProvider}