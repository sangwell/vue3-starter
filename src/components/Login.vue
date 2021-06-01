<template>
    <div class="login-page">
        <h1>Login</h1>
        <div><input type="text"></div>
        <div><input type="text"></div>
        <div>
            <button type="button" @click="login()">登录</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "login",
        methods: {
            login() {
                console.log('login=======');
                this.$router.push('/main');
            }
        }
    }
</script>

<style scoped>
    .login-page {
        text-align: center;
        padding-top: 100px;
    }

    div {
        margin: 10px 0;
    }

    button {
        cursor: pointer;
    }
</style>
