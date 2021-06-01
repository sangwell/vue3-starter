<template>
    <!--<HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />-->
    <div class="main-layout">
        <div class="left">
            <h1>菜单</h1>
            <p>
                <router-link to="/home">Go to Home</router-link>
            </p>
            <p>
                <router-link to="/login">Go to Login</router-link>
            </p>
        </div>
        <div class="right">
            <router-view></router-view>
        </div>
    </div>
</template>

<script lang="ts">
    import {defineComponent} from 'vue'
    import HelloWorld from './components/HelloWorld.vue'

    export default defineComponent({
        name: 'App',
        components: {
            HelloWorld
        }
    })
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        /*text-align: center;*/
        color: #2c3e50;
        margin-top: 60px;
    }

    .main-layout {
        position: relative;
    }

    .left {
        float: left;
        border: 1px solid #222;
    }

    .right {
        float: left;
    }
</style>
