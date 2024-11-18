import axios from "axios";

async function MDPGet() {
    try {
        const response = await axios.get('http://127.0.0.1:8000/metodoDePago')
        return response.data
    } catch (error) {
        console.error(error)
        throw error
    }
    
}
async function MDPPost(datos) {
    try {
        const response = await axios.post('http://127.0.0.1:8000/metodoDePago',datos)
        return response.data
    } catch (error) {
        console.error(error)
        throw error
    }
    
}
async function MDPPut() {
    
}
async function MDPDelete() {
    
}
export {MDPGet,MDPPost}