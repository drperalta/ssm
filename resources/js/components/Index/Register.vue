<template>
    <div class="register-component">
        <div class="mb2">SIGN UP</div>

        <div class="mb1">
            <a-alert :message="alert.error" type="error" v-if="alert.error"/>
            <a-alert :message="alert.success" type="success" v-if="alert.success"/>
        </div>
        
        <a-form @submit.prevent="register" :form="form">
            <a-form-item hasFeedback>
                <a-input placeholder="Full Name" v-decorator="['fullname', validationRules.fullname]"></a-input>
            </a-form-item>
            <a-form-item hasFeedback>
                <a-input placeholder="Email" v-decorator="['email', validationRules.email]"></a-input>
            </a-form-item>
            <a-form-item hasFeedback>
                <a-input placeholder="Username" v-decorator="['username', validationRules.username]"></a-input>
            </a-form-item>
            <div class="divider-container">
                <a-divider class="divider" type="horizontal" />
            </div>
            <a-form-item hasFeedback>
                <a-input placeholder="Password" type="password" v-decorator="['password', validationRules.password]"></a-input>
            </a-form-item>
            <a-form-item hasFeedback>
                <a-input placeholder="Confirm Password" type="password" v-decorator="['confirmPassword', validationRules.confirmPassword]"></a-input>
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
            validationRules: {
                fullname: {
                    rules: [{required: true, message: 'Fullname is required'}]
                },
                email: {
                    rules: [{required: true, message: 'Email is required'},{type: 'email', message: 'Email is not a valid email'}]
                },
                username: {
                    rules: [{required: true, message: 'Username is required'}]
                },
                password: {
                    rules: [{required: true, message: 'Password is required'},{min: 6, message: 'Password must be at least 6 characters'}]
                },
                confirmPassword: {
                    rules: [{required: true, message: 'Confirm Password is required'},{min: 6, message: 'Password must be at least 6 characters'}]
                }
            }
        }
    },
    methods: {
        register(){
            this.clearAlert();
            this.form.validateFields((err,data) => {
                if (!err) {
                    Vue.auth.register(this, data)
                }
            });
        },
        clearAlert(){
            this.alert.error = ''
            this.alert.success = ''
        }
    },
    beforeCreate(){
        this.form = this.$form.createForm(this);
    }
}
</script>

<style lang="scss">
.register-component{
    .ant-form{
        .ant-form-item{
            margin-bottom: 0px !important;
            .ant-form-explain{
                text-align: left;
            }
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