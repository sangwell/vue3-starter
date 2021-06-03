<template>
    <h1>Device page</h1>
    <input v-model="message" placeholder="edit me"/>
    <button type="button" @click="add()">Add</button>
    <ul id="array-rendering">
        <li v-for="(item,index) in devices">
            {{index+1}} , {{ item }}
        </li>
    </ul>
</template>

<script>
    import {reactive, onUnmounted, onUpdated, onMounted, toRefs} from 'vue';

    export default {
        name: "Device",
        setup() {
            onMounted(() => {
                console.log('mounted!')
            });
            onUpdated(() => {
                console.log('updated!')
            });
            onUnmounted(() => {
                console.log('unmounted!')
            });
        },
        data() {
            return {
                message: '',
                devices: ['Device A', 'Device B', 'Device C']
            }
        },
        methods: {
            add() {
                console.log('add');
                // this.devices.push(this.message);
                // this.message = '';
                this.$http.get('https://b-gold-cdn.xitu.io/favicons/v2/manifest.json').then(response => {

                    console.log(response);
                    // get body data
                    // this.someData = response.body;

                }, response => {
                    // error callback
                });
            }
        }
    }
</script>

<style scoped>

</style>
