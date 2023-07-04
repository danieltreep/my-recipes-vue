import { createRouter, createWebHistory } from 'vue-router'
import RecipesPage from '../views/recipes/RecipesPage.vue'
import RecipePage from '../views/recipes/RecipePage.vue'
import LoginPage from '../views/auth/LoginPage.vue'
import SignupPage from '../views/auth/SignupPage.vue'
import NewRecipePage from '../views/recipes/NewRecipePage.vue'
import FavoritesPage from '../views/recipes/FavoritesPage.vue'
import AccountPage from '../views/AccountPage.vue'
import CategoryPage from '../views/recipes/CategoryPage.vue'

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
    },
    {
      path: '/recipes/:category',
      name: 'Category',
      component: CategoryPage,
      props: true
    },
    {
      path: '/recipes/:category/:id',
      name: 'Recipe',
      component: RecipePage,
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
      component: NewRecipePage
    },
    {
      path: '/favorites',
      name: 'Favorites',
      component: FavoritesPage
    },
    {
      path: '/account',
      name: 'Account',
      component: AccountPage
    },
  ]
})

export default router
