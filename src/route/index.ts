import {createRouter, createWebHashHistory} from "vue-router";

const login = () => import("../components/Login.vue");
const main = () => import("../components/Main.vue");
const device = () => import("../components/Device.vue");
const user = () => import("../components/User.vue");

const routes = [
    {path: "/", redirect: "/login"},
    {
        path: "/login",
        name: "login",
        component: login
    },
    {
        path: "/main",
        name: "main",
        component: main,
        children: [
            {path: '', redirect: "/main/device"},
            {
                // 当 /main/device 匹配成功，
                // Device 会被渲染在 User 的 <router-view> 中
                path: '/main/device',
                name: "device",
                component: device
            },
            {
                path: '/main/user',
                name: "user",
                component: user
            },
        ]
    }
];
export const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})
