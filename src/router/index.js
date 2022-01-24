import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Cv from '../views/Cv.vue';
import Project from '../views/Project.vue';
import Travel from '../views/Travel.vue';


Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/cv',
      name: 'Cv',
      component: Cv
    },
    {
      path: '/project',
      name: 'Project',
      component: Project   
    },
    {
      path: '/travel',
      name: 'Travel',
      component: Travel   
    }
]

})

