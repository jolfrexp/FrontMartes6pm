import axios from "axios";

async function IngresoPost(data) {
    try {
        const response = await axios.post('http://127.0.0.1:8000/ingreso',data)
        console.log(response.data)
        return response.data
    } catch (e) {
        console.error(e)
        
    }
    
}
export {IngresoPost}