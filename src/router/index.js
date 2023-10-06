import { createRouter, createWebHistory } from 'vue-router'
import StartPage from '../views/StartPage.vue'
import RecipePage from '../views/RecipePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: StartPage
    },
    {
      path: '/Category',
      name: 'Category',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Category.vue')
    },
    {
      path: '/Recipe/:id',
      name: 'Recipe',
      component: RecipePage
    }
  ]
})

export default router
