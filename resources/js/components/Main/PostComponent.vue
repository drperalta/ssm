<template>
    <div class="post-component">
       <a-row>
            <a-col span="24" :gutter="16">
                <a-card>
                    <a-row justify="center">
                        <a-col :xs="22" :md="18">
                            <a-textarea autosize placeholder="What's happening?" :rows="2" v-model="postContent"/>
                            <div style="float: right; margin-right: 5px; font-size: 12px; color: grey">{{ postContent.length }}/120</div>
                        </a-col>
                        <a-col :xs="2">
                            <div style="padding: 5px;">
                                <a-progress type="circle" :percent="postContentCount" :width="25" :showInfo="false" :status="postCountentProgressStatus"/> 
                            </div>
                        </a-col>
                        <a-col :xs="22" :md="4">
                            <a-button type="primary" :disabled="postContent.length > 120" block @click="post">Post</a-button>
                        </a-col>
                        <a-col :xs="2" :md="0">

                        </a-col>
                    </a-row>
                </a-card>
            </a-col>
            <a-col span="24">
                <PostListComponent></PostListComponent>
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
            postContent: ''
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
        }
    },
    methods: {
        post(){
            // 
        }
    },
}
</script>

<style lang="less">
.post-component{
    .float-left{
        float: left !important;
    }
}
</style>