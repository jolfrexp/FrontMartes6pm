import React, { createContext, useState } from 'react'
let ingresoContext = createContext()
function IngresoProvider({children}) {
    let [infoIngreso,setInfoIngreso] = useState([])
    return (
        <ingresoContext.Provider value= {{infoIngreso,setInfoIngreso}}>
            {children}
        </ingresoContext.Provider>
    )
}

export {ingresoContext,IngresoProvider}
