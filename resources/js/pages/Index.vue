<template>
    <div class="index-page">
        <div class="container">
            <img class="logo mb2" src="../../assets/img/ssm-logo.png" alt="SSM">
        
            <a-card>
                <router-view></router-view>
            </a-card>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    }
}
</script>

<style lang="less">
.index-page{
    display: table-cell; 
    vertical-align: middle;
    width: 100vw;
    height: 100vh;
    text-align: center;

    .container{
        margin: 0 auto; 
        max-width: 330px;
        top: 40% !important;

        .logo{
            width: 80px;
        }
    }   
}
</style>