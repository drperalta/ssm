export default function(Vue){
    Vue.user = {

        async user(context){
            try{
                const result = await axios.get('/api/user/information')

                context.$store.dispatch('setInformation', result.data)
                context.loading = false;
            }
            catch(err){
                console.log(err)
            }
        }
    }
}