<template>
    <div class="post-component">
       <a-row>
            <a-col span="24" :gutter="16">
                <a-card>
                    <a-row justify="center">
                        <!-- Post TextArea and Counter -->
                        <a-col :xs="22" :md="18">
                            <a-form-item :validateStatus="postCountentProgressStatus === 'exception'? 'error' : ''">
                                <a-textarea autosize placeholder="What's happening?" :rows="2" v-model="postContent" :disabled="disabled"/>
                            </a-form-item>
                            <div style="float: right; margin-right: 5px; font-size: 12px; color: grey">{{ postContent.length }}/120</div>
                        </a-col>
                        <!-- Post Progress Counter -->
                        <a-col :xs="2">
                            <div style="padding: 10px 5px;">
                                <a-progress type="circle" :percent="postContentCount" :width="25" :showInfo="false" :status="postCountentProgressStatus"/> 
                            </div>
                        </a-col>
                        <!-- Post Button -->
                        <a-col :xs="22" :md="4">
                            <a-button style="margin-top: 7px;" type="primary" :disabled="postContent.length > 120 || postContent.length <= 0 || disabled" block @click="post">Post</a-button>
                        </a-col>
                        <a-col :xs="2" :md="0"></a-col>
                    </a-row>
                </a-card>
            </a-col>
            <a-col span="24">
                <!-- List of Posts -->
                <PostListComponent :key="update" v-if="posts"></PostListComponent>
            </a-col>
       </a-row>
    </div>
</template>

<script>
import PostListComponent from './PostListComponent'

export default {
    components: { PostListComponent },
    data(){
        return{
            postContent: '',
            update: 0,
            disabled: false
        }
    },
    computed:{
        postContentCount(){
            return (100 * this.postContent.length) / 120;
        },
        postCountentProgressStatus(){
            if(this.postContent.length == 120){
                return 'success'
            }else if(this.postContent.length > 120){
                return 'exception'
            }else{
                return 'active'
            }
        },
        posts(){
            return this.$store.state.posts
        }
    },
    methods: {
        post(){
            this.disabled = true
            if(this.postContent.length > 120 || this.postContent.length <= 0){
                this.disabled = false
                return
            }

            Vue.post.post(this, this.postContent)
        },
    },
    created(){
        let vm = this
        Echo.channel('public-feed')
            .listen('DeletePostEvent', (e) => {
                vm.update += 1
            })
    }
}
</script>

<style lang="less">
.post-component{
    .ant-card-body{
        padding: 16px 16px 10px 16px;

        .ant-form-item{
            margin: 0px;
        }
    }
    .float-left{
        float: left !important;
    }
}
</style>