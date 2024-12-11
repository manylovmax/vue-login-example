import { createRouter, createWebHistory } from "vue-router";

import LoginPage from "./components/LoginPage.vue";
import LoggedinPage from "./components/LoggedinPage.vue";
import NotFound from "./components/NotFound.vue";

function isLoggedIn(to, from) {
    const user = JSON.parse(window.localStorage.getItem('user'));
    if (!user)
        return '/';

    return true;
}

const routes = [
    { path: '/', component: LoginPage },
    { path: '/logged-in', component: LoggedinPage, beforeEnter: [isLoggedIn] },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
  ]
  
const router = createRouter({
    history: createWebHistory(),
    routes,
  })

export default router;