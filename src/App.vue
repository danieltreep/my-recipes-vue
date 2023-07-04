<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavTabs from './components/NavTabs.vue';
import getUser from './composables/auth/getUser';

const {user} = getUser()

</script>

<template>
  <RouterView />
  <NavTabs v-if="user"/>
</template>

<style scoped>

</style>
