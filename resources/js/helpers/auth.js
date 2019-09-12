import Axios from "axios"

export default function(Vue){
    Vue.auth = {
        async register(context, payload){
            const result = await axios.post('/api/auth/register', payload);

            console.log(result)
        },
        async login(context, payload){
            const result = await axios.post('/api/auth/login', payload);

            console.log(result.data)
        }
    }
}