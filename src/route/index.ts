import {createRouter, createWebHashHistory} from "vue-router";

const home = () => import("../components/Home.vue");
const login = () => import("../components/Login.vue");

const routes = [
    {path: "/", redirect: "/home"},
    {
        path: "/home",
        name: "home",
        component: home
    },
    {
        path: "/login",
        name: "login",
        component: login
    }
];
export const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})
