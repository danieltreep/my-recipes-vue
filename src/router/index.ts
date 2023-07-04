import { createRouter, createWebHistory } from 'vue-router'
import { useCurrentUserStore } from '@/stores/currentUser'

import RecipesPage from '../views/recipes/RecipesPage.vue'
import RecipePage from '../views/recipes/RecipePage.vue'
import LoginPage from '../views/auth/LoginPage.vue'
import SignupPage from '../views/auth/SignupPage.vue'
import NewRecipePage from '../views/recipes/NewRecipePage.vue'
import FavoritesPage from '../views/recipes/FavoritesPage.vue'
import AccountPage from '../views/AccountPage.vue'
import CategoryPage from '../views/recipes/CategoryPage.vue'

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
      redirect: '/login'
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
      component: CategoryPage,
      beforeEnter: requireAuth,
      props: true
    },
    {
      path: '/recipes/:category/:id',
      name: 'Recipe',
      component: RecipePage,
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
      component: SignupPage
    },
    {
      path: '/new',
      name: 'NewRecipe',
      component: NewRecipePage,
      beforeEnter: requireAuth
    },
    {
      path: '/favorites',
      name: 'Favorites',
      component: FavoritesPage,
      beforeEnter: requireAuth
    },
    {
      path: '/account',
      name: 'Account',
      component: AccountPage,
      beforeEnter: requireAuth
    },
  ]
})

export default router
