<template>
    <div class="post-list-component">
        <a-card class="card" v-for="(post, index) in posts" :key="index">
            <!-- User Avatar -->
            <span class="mr1" style="float: left">
                <a-avatar class="avatar" :size="40" icon="user" />
            </span>
            <span>
                <a-row class="row">
                    <!-- Fullname and Username -->
                    <a-col :xs="22" :sm="23">
                        <span class="fullname">{{post.fullname}}</span>
                        <span class="username">@{{post.username}}</span>
                    </a-col>
                    <!-- Post Options -->
                    <a-col :xs="2" :sm="1">
                        <a-dropdown class="post-options" :trigger="['click']" placement="bottomRight" v-if="userPost(post.user_id)">
                            <a class="ant-dropdown-link" href="#">
                                <a-button type="link" shape="circle" icon="ellipsis" size="small"></a-button>
                            </a>
                            <a-menu slot="overlay">
                                <a-menu-item>
                                    <a @click="editPost(post.id)">Edit</a>
                                </a-menu-item>
                                <a-menu-item>
                                    <a @click="deletePost(post.id)">Delete</a>
                                </a-menu-item>
                            </a-menu>
                        </a-dropdown>
                    </a-col>
                    <!-- Post Time -->
                    <a-col span="24">
                        <span class="post-time">{{ timePosted(post.created_at) }} ago</span>
                    </a-col>
                    <!-- Post Content -->
                    <a-col span="24">
                        <p class="post-content">{{ post.post }}</p>
                    </a-col>
                </a-row>
            </span>
        </a-card>
    </div>
</template>

<script>
export default {
    data(){
        return{
            postList: [
                {   
                    id: 1,
                    name: 'David Peralta',
                    username: 'peraltadavidr',
                    postContent: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard',
                    postTime: '1sec'
                },
                {   
                    id: 2,
                    name: 'David Peralta',
                    username: 'peraltadavidr',
                    postContent: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard',
                    postTime: '4sec'
                },
                {   
                    id: 3,
                    name: 'David Peralta',
                    username: 'peraltadavidr',
                    postContent: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard',
                    postTime: '23sec'
                },
                {   
                    id: 4,
                    name: 'David Peralta',
                    username: 'peraltadavidr',
                    postContent: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard',
                    postTime: '44sec'
                },
                {   
                    id: 5,
                    name: 'David Peralta',
                    username: 'peraltadavidr',
                    postContent: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard',
                    postTime: '56sec'
                }
            ]
        }
    },
    computed:{
        posts(){
            return this.$store.state.posts
        }
    },
    methods: {
        getPost(){
            Vue.post.get(this)
        },
        editPost(){
            // 
        },
        deletePost(){
            // 
        },
        userPost(user_id){
            return user_id == this.$store.state.information.id ? true : false
        },
        timePosted(created_at){

        }
    },
    created(){
        this.getPost();
    }
}
</script>

<style lang="less">
.post-list-component{
    .ant-card-body{
        padding: 15px !important;
    }
    .card{
        margin: 8px 0px;
    }
    .avatar{

    }
    .fullname{
        font-weight: 600;
    }
    .username{
        color: rgb(145, 145, 145);
    }
    .post-time{
        color: rgb(145, 145, 145);
        font-size: 12px;
    }
    .post-content{
        margin-top: 8px;
        font-size: 15px;
        font-weight: 400;
    }
    .post-options{
        float: right;
        position: absolute;
    }
    .row{
        margin-left: 48px;
    }
    .ant-col-18{
        line-height: 1;
    }
}


</style>