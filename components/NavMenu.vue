<template>
  <nav class="nav-bar glass">
    <div class="column-container" style="justify-content: space-between">
      <div style="padding: 1rem;">
        <h3>Kelsey Florek</h3>
      </div>
      <div style="width:50%; padding: 1rem;">
        <h4 class="link-set">
          <NuxtLink
            v-for="(item, index) in menuItems"
            :key="index"
            :to="item.to"
            class="">
            {{ item.label }}
          </NuxtLink>
        </h4>
      </div>
    </div>
  </nav>
</template>

<script setup>
const route = useRoute()

const menuItems = [
  { label: 'home', to: '/' },
  { label: 'about', to: '/about' },
  { label: 'publications', to: '/publications' },
  { label: 'lectures', to: '/lectures' },
  { label: 'talks', to: '/talks' }
]

const isActive = (path) => route.path === path
</script>