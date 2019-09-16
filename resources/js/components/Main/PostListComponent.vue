<template>
    <div class="post-list-component">
        <div class="no-post" v-if="posts.length == 0">
            <img class="logo" src="../../../assets/img/ssm-logo-shadow.png" alt="">
            <p>No post available to show</p>
        </div>
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
                                    <a @click="deletePost(post.id)">Delete</a>
                                </a-menu-item>
                            </a-menu>
                        </a-dropdown>
                    </a-col>
                    <!-- Post Time -->
                    <a-col span="24">
                        <span class="post-time">{{ timePosted(post.created_at) }}</span>
                    </a-col>
                    <!-- Post Content -->
                    <a-col span="24">
                        <p class="post-content">{{ post.post }}</p>
                    </a-col>
                </a-row>
            </span>
        </a-card>
        <div class="spin" v-if="this.$store.state.postPage < this.$store.state.postMaxPage && posts.length > 0">
            <a-spin />
        </div>
        <a-divider v-if="lastPost">I'm glad you came here but there no more post to show</a-divider>
    </div>
</template>

<script>
import moment from 'moment'
import { setTimeout } from 'timers';

export default {
    
    data(){
        return{
            lastPost: false,
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
        updatePost(){
            setTimeout(() =>{
                Vue.post.update(this)
            }, 500)
        },
        deletePost(post_id){
            Vue.post.delete(this, post_id)
        },
        userPost(user_id){
            return user_id == this.$store.state.information.id ? true : false
        },
        timePosted(created_at){
            return moment(created_at).fromNow()
        },
        handleScroll (event) {
            window.onscroll = () => {
                if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
                    if(this.$store.state.postPage < this.$store.state.postMaxPage){
                        this.updatePost()
                    }

                    if(this.$store.state.postPage == this.$store.state.postMaxPage){
                        this.lastPost = true
                    }
                }
            };
        }
    },
    created(){
        this.getPost();
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed () {
        window.removeEventListener('scroll', this.handleScroll);
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
        max-width:400px; 
        word-wrap:break-word;
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
    .no-post{
        padding-top: 20px;
        text-align: center;
        margin: 0 auto;
        .logo{
            width: 80px;
            opacity: 0.4;
        }
        p{
            color: rgb(173, 173, 173);
            font-size: 14px;
        }
    }
    .ant-divider-inner-text{
        font-weight: 400;
        font-size: 13px;
        color: rgb(163, 163, 163);
    }
}

.spin {
    text-align: center;
    border-radius: 4px;
    margin-bottom: 20px;
    padding: 30px 50px;
}


</style>