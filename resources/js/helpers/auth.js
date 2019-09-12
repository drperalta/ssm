import Axios from "axios"

export default function(Vue){
    Vue.auth = {
        async register(context, payload){
            try{
                const result = await axios.post('/api/auth/register', payload);

                context.alert.success = result.data.message;
                context.clearForm();
            }
            catch(err){
                let error = Object.values(err.response.data.errors);
                context.alert.error = error[0][0];
            }
            
        },
        async login(context, payload){
            const result = await axios.post('/api/auth/login', payload);

            console.log(result.data)
        }
    }
}