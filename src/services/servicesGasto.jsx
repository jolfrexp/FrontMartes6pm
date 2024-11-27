import axios from "axios";

async function GastoPost(data) {
    try {
        const response = await axios.post('http://127.0.0.1:8000/gasto',data)
        return response.data
    } catch (e) {
        console.error(e)
        
    }
}
async function GastoGet(id) {
    try {
        const response = await axios.get(`http://127.0.0.1:8000/gasto/${id}`)
        return response.data
    } catch (e) {
        console.error(e)
        
    }
    
}
export {GastoGet,GastoPost}