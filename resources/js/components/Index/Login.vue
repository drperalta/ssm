<template>
    <div class="login-component">
        <div class="mb2">SIGN IN</div>
        
        <div class="mb1">
            <a-alert :message="alert.error" type="error" v-if="alert.error"/>
        </div>

        <a-form @submit.prevent="login" :form="form">
            <a-form-item hasFeedback>
                <a-input placeholder="Username" v-decorator="['username', validationRules.username]"/>
            </a-form-item>
            <a-form-item hasFeedback>
                <a-input placeholder="Password" type="password" v-decorator="['password', validationRules.password]"/>
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
            alert:{
                error: ''   
            },
            validationRules: {
                username: {
                    rules: [{required: true, message: 'Username is required'}]
                },
                password: {
                    rules: [{required: true, message: 'Password is required'},{min: 6, message: 'Password must be at least 6 characters'}]
                }
            }
        }
    },
    methods: {
        login(){
            this.clearAlert();
            this.form.validateFields((err,data) => {
                if (!err) {
                    Vue.auth.login(this, data)
                }
            });
        },
        clearAlert(){
            this.alert.error = ''
        }
    },
    beforeCreate(){
        this.form = this.$form.createForm(this);
    }
}
</script>

<style lang="less">
.ant-form-item{
    margin-bottom: 0px !important;
    .ant-form-explain{
        text-align: left;
    }
}
</style>