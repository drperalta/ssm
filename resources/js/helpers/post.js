
export default function(Vue){
    Vue.post = {

        async post(context, payload){   
            try{

                const data = {
                    post: payload,
                    user_id: context.$store.state.information.id
                }

                const result = await axios.post('/api/post', data)
                
                context.postContent = ''
                context.update += 1;
            }
            catch(err){
                console.log(err)
            }
        },

        async get(context){
            const result = await axios.get('/api/post')
            context.$store.dispatch('setPosts', result.data.data)
        }
    }
}