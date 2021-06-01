<template>
    <div class="main-layout">
        <div class="left">
            <h1>菜单</h1>
            <p>
                <router-link to="/main/device">device</router-link>
            </p>
            <p>
                <router-link to="/main/user">user</router-link>
            </p>
        </div>
        <div class="right">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        name: "main"
    }
</script>

<style scoped>

    .main-layout {
        position: relative;
    }

    .left {
        float: left;
        width: 160px;
        border: 1px solid #222;
        padding: 12px;
    }

    .right {
        float: left;
        width: calc(100% - 250px);
        height: calc(100vh - 70px);
        margin-left: 20px;
        border: 1px solid #ccc;
        padding: 10px;
    }
</style>
