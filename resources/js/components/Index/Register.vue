<template>
    <div class="register-component">
        <div class="mb2">SIGN UP</div>

        <a-alert :message="alert.error" type="error" v-if="alert.error"/>
        <a-alert :message="alert.success" type="success" v-if="alert.success"/>

        <a-form @submit.prevent="register">
            <a-form-item>
                <a-input placeholder="Full Name" v-model="registerForm.fullname"></a-input>
            </a-form-item>
            <a-form-item>
                <a-input placeholder="Email" v-model="registerForm.email"></a-input>
            </a-form-item>
            <a-form-item>
                <a-input placeholder="Username" v-model="registerForm.username"></a-input>
            </a-form-item>
            <div class="divider-container">
                <a-divider class="divider" type="horizontal" />
            </div>
            <a-form-item>
                <a-input placeholder="Password" v-model="registerForm.password" type="password"></a-input>
            </a-form-item>
            <a-form-item>
                <a-input placeholder="Confirm Password" v-model="registerForm.confirmPassword" type="password"></a-input>
            </a-form-item>

            <a-button class="mt3 mb1" type="primary" html-type="submit" block>Register</a-button>
            <router-link :to="{ name: 'Login'}">Already have an account? Sign In</router-link>
        </a-form>
    </div>
</template>

<script>
export default {    
    data(){
        return{
            alert:{
                error: '',
                success: ''
            },
            registerForm: {
                fullname: '',
                email: '',
                username: '',
                password: '',
                confirmPassword: ''
            }
        }
    },
    methods: {
        register(){
            this.clearAlert();
            Vue.auth.register(this, this.registerForm)
        },
        clearAlert(){
            this.alert.error = ''
            this.alert.success = ''
        },
        clearForm(){
            this.registerForm = {
                fullname: '',
                email: '',
                username: '',
                password: '',
                confirmPassword: ''
            }
        }
    }
}
</script>

<style lang="scss">
.register-component{
    .ant-form{
        .ant-form-item{
            margin-bottom: 0px !important;
        }
    }
    .divider-container{
        padding: 0px 15px;
        .divider{
            margin: 8px 0px;
        }
    }
    
}

</style>