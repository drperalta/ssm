<template>
    <div class="main-page">
        <a-layout style="background: transparent;">
            <a-layout-header>
                <div class="header">
                    <NavbarComponent></NavbarComponent>
                </div>
            </a-layout-header>  

            <a-layout-content>
                <div class="content p1">
                    <a-row :gutter="16">
                        <a-col :xs="24" :sm="9">    
                            <UserCardComponent></UserCardComponent>
                        </a-col>
                        <a-col :xs="24" :sm="0" ><div style="margin: 8px"></div></a-col>
                        <a-col :xs="24" :sm="15">
                            <PostComponent ></PostComponent>   
                        </a-col>
                    </a-row>
                </div>
            </a-layout-content>
            
        </a-layout>
    </div>
</template>

<script>
import NavbarComponent from '../components/Main/NavbarComponent'
import UserCardComponent from '../components/Main/UserCardComponent'
import PostComponent from '../components/Main/PostComponent'

export default {
    components: { NavbarComponent, UserCardComponent, PostComponent },
    data(){
        return{

        }
    }
}
</script>

<style lang="less">
.main-page{
    
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
}
</style>