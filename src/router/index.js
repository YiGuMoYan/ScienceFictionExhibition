import Vue from 'vue'
import VueRouter from 'vue-router'
import WelcomeView from '@/views/WelcomeView.vue'
import StoryView from '@/views/StoryView.vue'

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
