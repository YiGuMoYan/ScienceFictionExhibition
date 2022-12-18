import Vue from 'vue'
import VueRouter from 'vue-router'
import StoryView from '@/views/StoryView.vue'
import WelcomeView from '@/views/WelcomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: WelcomeView
  },
  {
    path: '/story',
    component: StoryView
  }
]

const router = new VueRouter({
  routes
})

export default router
