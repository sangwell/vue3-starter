import Vue from 'vue'
import VueResource from 'vue-resource'
import {createApp} from 'vue'
import App from './App.vue'
import {router} from './route'

// Vue.use(VueResource);

const app = createApp(App);
app.use(router);
// app.use(VueResource);
app.mount('#app');
