import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Index from './components/Index.vue';
import Register from './components/pages/authentication/Register.vue';
import Portal from "./components/pages/portal/Portal";
import Login from "./components/pages/authentication/Login";
import {isLoggedIn} from "./service/authService";

Vue.use(VueRouter);
Vue.config.productionTip = false;


const router = new VueRouter({
  routes: [
    {
      path: "*",
      component: Index,
      props: {
        msg: "Hello"
      },
    },
    {
      path: "/portal",
      component: Portal,
      beforeEnter: (to, from, next) => {
        if (isLoggedIn) {
          next();
        } else {
          next('/login');
        }
      }
    },
    {
      path: "/login",
      component: Login,
      beforeEnter: (to, from, next) => {
        if (isLoggedIn) {
          next();
        } else {
          next('/login');
        }
      }

    },
    {
      path: "/register",
      component: Register,
      props: {
        formName: "Register"
      },
      beforeEnter: (to, from, next) => {
        if (isLoggedIn) {
          next();
        } else {
          next('/login');
        }
      }
    },
  ]
});

new Vue({
  render: h => h(App),
  router,
}).$mount('#app');
