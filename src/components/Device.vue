<template>
    <h1>Device page</h1>
    <ul id="array-rendering">
        <li v-for="(item,index) in devices">
            {{index+1}} , {{ item }}
        </li>
    </ul>
</template>

<script>
    export default {
        name: "Device",
        data() {
            return {
                devices: ['Device A', 'Device B', 'Device C']
            }
        }
    }
</script>

<style scoped>

</style>
