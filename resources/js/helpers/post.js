
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

        async update(context){
            const result = await axios.get(`/api/post?page=${context.$store.state.postPage}`)
            context.$store.dispatch('updatePosts', result.data.data.data)

            context.updatingPosts = false
        },

        async get(context){

            let posts = []

            for(let i = 1; i <= context.$store.state.postPage; i++){
                const result = await axios.get(`/api/post?page=${i}`)
                result.data.data.data.forEach(post =>{
                    posts.push(post)
                })
                
            }
            context.$store.dispatch('setPosts', posts)
            context.updatingPosts = false
        }
    }
}