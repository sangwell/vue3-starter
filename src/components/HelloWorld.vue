<template>
    <h1>{{name}} {{ msg }}</h1>
    <button @click="add()">count is: {{ count }}</button>
</template>

<script lang="ts">
    import {ref, defineComponent} from 'vue'

    export default defineComponent({
        props: {
            msg: {
                type: String,
                required: true
            }
        },
        data() {
            const count = ref(0)
            return {
                count,
                name: 'HelloWorld'
            }
        },
        mounted() {
            this.count++
        },
        methods: {
            add() {
                this.count++;
            }
        }
    })
</script>

<style scoped>
    a {
        color: #42b983;
    }

    label {
        margin: 0 0.5em;
        font-weight: bold;
    }

    code {
        background-color: #eee;
        padding: 2px 4px;
        border-radius: 4px;
        color: #304455;
    }
</style>
