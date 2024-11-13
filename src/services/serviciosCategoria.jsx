import axios from "axios";
async function CategoriaGet() {
    try {
        const response = await axios.get('http://127.0.0.1:8000/categoria')
        return response.data
    } catch (error) {
        console.error(error)
        throw error
    }
}
async function CategoriaPost(datos) {
    try {
        const response = await axios.post('http://127.0.0.1:8000/categoria',datos)
        return response.data       
    } catch (error) {
        console.log(error)
        
    }
    
}
export {CategoriaGet,CategoriaPost}