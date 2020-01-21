import axios from 'axios'
export async function GetCategory() {
    try {
        const response = await axios.get('http://localhost:3002/api/category');
        return response.data;
    } catch (e) {
        console.log(e);
    }
}
