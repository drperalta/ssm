<template>
    <a-spin :spinning="loading">
        <a-icon slot="indicator" type="loading" style="font-size: 32px" spin />
        <div class="main-page">
            <a-layout style="background: transparent;" v-if="!loading">
                <a-layout-header>
                    <div class="header">
                        <!-- Navbar Component -->
                        <NavbarComponent></NavbarComponent>
                    </div>
                </a-layout-header>  

                <a-layout-content>
                    <div class="content p1">
                        <a-row :gutter="16">
                            <a-col :xs="24" :sm="9">
                                <!-- User Card Component -->
                                <UserCardComponent></UserCardComponent>
                            </a-col>
                            <a-col :xs="24" :sm="0" ><div style="margin: 8px"></div></a-col>
                            <a-col :xs="24" :sm="15">
                                <!-- Post Component -->
                                <PostComponent ></PostComponent>   
                            </a-col>
                        </a-row>
                    </div>
                </a-layout-content>
                
            </a-layout>
        </div>
    </a-spin>
</template>

<script>
import NavbarComponent from '../components/Main/NavbarComponent'
import UserCardComponent from '../components/Main/UserCardComponent'
import PostComponent from '../components/Main/PostComponent'

export default {
    components: { NavbarComponent, UserCardComponent, PostComponent },
    data(){
        return{
            loading: true
        }
    },
    methods:{

    },
    beforeCreate(){
        Vue.user.user(this);
    }
}
</script>

<style lang="less">
.main-page{
    width: 100vw;
    height: 100vh;
    
    .ant-layout-header{
        height: 50px;
        padding: 5px 10px;
        line-height: 0;
        .header{
            max-width: 800px;
            margin: 0 auto;
        }
    }
    .ant-layout-content{
        padding-top: 16px;

        .content{
            max-width: 800px;
            margin: 0 auto;
        }
    }
    .spin-content{
        border: 1px solid #91d5ff;
        background-color: #e6f7ff;
        padding: 30px;
    }
}
</style>