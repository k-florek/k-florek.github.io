<template>
  <nav class="nav-bar glass">
    <ul class="nav-links">
      <li v-for="item in menuItems" :key="item.to">
        <NuxtLink
          :to="item.to"
          class=""
          :class="{ '': isActive(item.to) }"
        >
          {{ item.label }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup>
const route = useRoute()

const menuItems = [
  { label: 'Home', to: '/' },
  { label: 'Talks', to: '/talks' },
  { label: 'Publications', to: '/publications' }
]

const isActive = (path) => route.path === path
</script>

<style scoped>
nav {
  font-family: 'QuattrocentoSans', sans-serif;
}
</style>
