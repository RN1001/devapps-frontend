import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Index from './components/Index.vue';
import Register from './components/pages/register/Register.vue';
import Portal from "./components/pages/portal/Portal";


Vue.use(VueRouter);
Vue.config.productionTip = false;

const router = new VueRouter({
  routes: [
    {
      path: "*",
      component: Index,
      props: {
        msg: "Hello"
      }
    },
    {
      path: "/register",
      component: Register,
      props: {
        formName: "Register"
      }
    },
    {
      path: "/portal",
      component: Portal
    }
  ]
});

new Vue({
  render: h => h(App),
  router,
}).$mount('#app');
