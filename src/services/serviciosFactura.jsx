import axios from "axios";
async function FacturaGet(id) {
    try {
        const response = await axios.get(`http://127.0.0.1:8000/factura/${id}`)
        return response.data 
    } catch (e) {
        console.error(e)
        throw e
    }
    
    
}
async function FacturaPost(data) {
    try {
        const response = await axios.post('http://127.0.0.1:8000/factura',data)
        return response.data 
    } catch (e) {
        console.error(e)
        throw e   
    } 
}
export {FacturaGet,FacturaPost}