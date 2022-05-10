import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.config.productionTip = false

import Experience from '../src/components/ExperienceGraph.vue'
import result from '../src/components/resultGraph.vue'
import rating from '../src/components/ratingGraph.vue'
import certified from '../src/components/certificateView.vue'

Vue.use(VueRouter)
const router = new VueRouter({
  mode:'history',
  routes: [
    {path: '/certified', component: certified},
    {path: '/experience', component: Experience},
    {path: '/result', component: result},
    {path: '/rating', component: rating},
  ]
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')