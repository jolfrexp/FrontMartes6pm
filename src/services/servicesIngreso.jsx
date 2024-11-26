import axios from "axios";

async function IngresoPost(data) {
    try {
        const response = await axios.post('http://127.0.0.1:8000/ingreso',data)
        return response.data
    } catch (e) {
        console.error(e)
        
    }
    
}
async function IngresoGet(id) {
    try {
        const response = await axios.get(`http://127.0.0.1:8000/ingreso/${id}`)
        return response.data
    } catch (e) {
        console.error(e)
        
    }
    
}
export {IngresoPost,IngresoGet}