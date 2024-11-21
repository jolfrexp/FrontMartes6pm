import axios from "axios";

async function GastoPost(data) {
    try {
        const response = await axios.post('http://127.0.0.1:8000/gasto',data)
        console.log(response.data)
        return response.data
    } catch (e) {
        console.error(e)
        
    }
}
async function GastoGet(id) {
    try {
        const response = await axios.get(`http://127.0.0.1:8000/gasto/${id}`)
        console.log(response.data)
        return response.data
    } catch (e) {
        console.error(e)
        
    }
    
}
export {GastoGet,GastoPost}