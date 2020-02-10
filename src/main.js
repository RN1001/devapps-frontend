import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Index from './components/Index.vue';
import Register from './components/pages/register/Register.vue';


Vue.use(VueRouter);
Vue.config.productionTip = false;

const router = new VueRouter({
  routes: [
    {
      path: "*",
      component: Index
    },
    {
      path: "/register",
      component: Register
    }
  ]
});

new Vue({
  render: h => h(App),
  router,
}).$mount('#app');
