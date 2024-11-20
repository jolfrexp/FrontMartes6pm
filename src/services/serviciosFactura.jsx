import axios from "axios";
async function FacturaGet() {
    
}
async function FacturaPost(dataFac,dataIng,dataGast) {
    try {
        let dataI = JSON.stringify(dataIng)
        console.log(dataI)
        const response = await axios.post('http://127.0.0.1:8000/factura',dataFac)
        let datos = JSON.parse(response.data)
        console.log(datos)
        let i = 0
        while(i < dataI.length){
            console.log(i)
            console.log(dataI.length)
            dataI.factura_id = 
            console.log(dataI[i])
            const response2 = await axios.post('http://127.0.0.1:8000/ingreso',dataI[i])
            console.log("respuesta de ingreso: "+response2)
            i = i + 1
        }    
        // dataGast.factura_id = response.data.id
        // const response3 = await axios.post('http://127.0.0.1:8000/gasto',dataGast[0])
        // console.log("Respuesta de Gasto: "+response3)
    } catch (e) {
        console.error(e)
        throw e   
    } 
}
export {FacturaGet,FacturaPost}