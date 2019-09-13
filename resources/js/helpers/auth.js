export default function(Vue){
    Vue.auth = {
        async register(context, payload){
            try{
                const result = await axios.post('/api/auth/register', payload);

                context.alert.success = result.data.message;
                context.form = context.$form.createForm(context);
                context.disabled = false
            }
            catch(err){
                let error = Object.values(err.response.data.errors);
                context.alert.error = error[0][0];
                context.disabled = false
            }
            
        },
        async login(context, payload){
            try{
                const result = await axios.post('/api/auth/login', payload);
                

                localStorage.setItem('token', result.data.access_token)
                localStorage.setItem('expiration', result.data.expires_at)

                context.$store.commit('LOGIN')

                context.$router.go({ name: 'Main' })
                context.disabled = false
            }
            catch(err){
                context.alert.error = err.response.data.error;
                console.log(err)
                context.disabled = false
            }
        },
        async logout(context){
            try{
                const result = await axios.post('/api/auth/logout', { headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token')}})

                localStorage.removeItem('token')
                localStorage.removeItem('expiration')

                context.$router.go({ name: 'Index' })
            }
            catch(err){
                console.log(err)
            }
        },

        getToken(){
            var token = localStorage.getItem('token');
            var expiration = localStorage.getItem('expiration');

            if(!token || !expiration)
                return null;

            if(Date.now('GMT+8') > expiration){
                this.destroyToken();
                return null;
            }else{
                return token;
            }

        }
    }
}