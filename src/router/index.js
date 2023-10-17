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
      path: '/Category/:CategoryName',
      name: 'Category',
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
