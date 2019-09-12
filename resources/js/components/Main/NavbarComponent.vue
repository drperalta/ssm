<template>
    <div class="navbar-component">
        <!-- Logo -->
        <img class="item logo" src="../../../assets/img/ssm-logo.png" alt="">

        <a-dropdown class="avatar" :trigger="['click']" placement="bottomRight">
            <a class="ant-dropdown-link" href="#">
                <a-avatar icon="user"/>
            </a>
            <a-menu slot="overlay">
                <a-menu-item>
                    <a @click="logout">Logout</a>
                </a-menu-item>
            </a-menu>
        </a-dropdown>
    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    methods: {
        logout(){

        }
    }
}
</script>

<style lang="less">
.navbar-component{
    height: 55px !important;

    .logo{
        width: 55px;
    }
    .item{
        position: absolute;
    }
    .avatar{
        margin: 5px;
        float: right;
    }
    
}
</style>