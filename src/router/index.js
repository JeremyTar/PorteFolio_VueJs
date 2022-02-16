import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Cv from '../views/Cv.vue';
import Project from '../views/Project.vue';
import Travel from '../views/Travel.vue';
import Secret from '../views/Secret.vue';


Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/JeremyTardini',
      name: 'Home',
      component: Home
    },
    {
      path: '/JeremyTardini/cv',
      name: 'Cv',
      component: Cv
    },
    {
      path: '/JeremyTardini/project',
      name: 'Project',
      component: Project   
    },
    {
      path: '/JeremyTardini/travel',
      name: 'Travel',
      component: Travel   
    },
    {
      path: '/JeremyTardini/secret',
      name: 'Secret',
      component: Secret
    }
]

})

