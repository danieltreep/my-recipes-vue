import { createRouter, createWebHistory } from 'vue-router'
import RecipesPage from '../views/recipes/RecipesPage.vue'
import LoginPage from '../views/auth/LoginPage.vue'

// Route guard
import { auth } from '@/firebase/config'

const requireAuth = (to: any, from: any, next: Function) => {
  let user = auth.currentUser
  if(!user) {
    next({name: 'Login'})
  } else {
    next()
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/recipes'
    },
    {
      path: '/recipes',
      name: 'Recipes',
      component: RecipesPage,
      beforeEnter: requireAuth
    },
    {
      path: '/recipes/:category',
      name: 'Category',
      component: () => import('../views/recipes/CategoryPage.vue') ,
      beforeEnter: requireAuth,
      props: true
    },
    {
      path: '/recipes/:id',
      name: 'Recipe',
      component: () => import('../views/recipes/RecipePage.vue'),
      beforeEnter: requireAuth,
      props: true
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginPage
    },
    {
      path: '/signup',
      name: 'Signup',
      component: () => import('../views/auth/SignupPage.vue')
    },
    {
      path: '/new',
      name: 'NewRecipe',
      component: () => import('../views/recipes/NewRecipePage.vue'),
      beforeEnter: requireAuth
    },
    {
      path: '/favorites',
      name: 'Favorites',
      component: () => import('../views/recipes/FavoritesPage.vue'),
      beforeEnter: requireAuth
    },
    {
      path: '/account',
      name: 'Account',
      component: () => import('../views/AccountPage.vue'),
      beforeEnter: requireAuth
    },
  ]
})

export default router
