
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

                context.$message.success(result.data.message);
                context.disabled = false
            }
            catch(err){
                console.log(err)
                context.disabled = false
            }
        },
        async get(context){
            try{
                let posts = []

                for(let i = 1; i <= context.$store.state.postPage; i++){
                    const result = await axios.get(`/api/post?page=${i}`)
                    result.data.data.data.forEach(post =>{
                        posts.push(post)
                    })
                    context.$store.state.postMaxPage = result.data.data.last_page
                }
                context.$store.dispatch('setPosts', posts)
            }
            catch(err){
                console.log(err)
            }
        },

        async update(context){
            try{
                context.$store.dispatch('nextPage')

                const result = await axios.get(`/api/post?page=${context.$store.state.postPage}`)
                context.$store.dispatch('updatePosts', result.data.data.data)
            }
            catch(err){
                console.log(err)
            }
        },

        async delete(context, post_id){
            try{
                const result = await axios.delete(`/api/post/${post_id}`)

                context.getPost();

                context.$message.success(result.data.message);
            }
            catch(err){
                console.log(err)
            }
        }
    }
}