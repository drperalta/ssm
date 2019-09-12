<template>
    <div class="login-component">
        <div class="mb2">SIGN IN</div>

        <a-form @submit="login">
            <a-form-item>
                <a-input placeholder="Username" v-model="loginForm.username"/>
            </a-form-item>
            <a-form-item>
                <a-input placeholder="Password" type="password" v-model="loginForm.password"/>
            </a-form-item>

            <a-button class="mt3 mb1" type="primary" html-type="submit" block>Login</a-button>
            <router-link :to="{ name: 'Register'}">Need and account? Sign up</router-link>
        </a-form>
    </div>
</template>

<script>
export default {
    data(){
        return{
            loginForm: {
                username: '',
                password: ''
            }
        }
    },
    methods: {
        login(){
            // 
        }
    }
}
</script>

<style lang="less">
.ant-form-item{
    margin-bottom: 0px !important;
}
</style>