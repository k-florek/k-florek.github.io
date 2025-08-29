<template>
  <nav class="nav-bar glass">
    <div class="column-container" style="justify-content: space-between">
      <div class="nav-title">Kelsey Florek</div>
      <div class="nav-items">
        <div class="nav-links" id="nav-links">
          <NuxtLink
            v-for="(item, index) in menuItems"
            :key="index"
            :to="item.to"
            class="">
            {{ item.label }}
          </NuxtLink>
          <a href="javascript:void(0);" class="icon" @click="navResponse">
            <FontAwesomeIcon :icon="['fa', 'bars']" />
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>

</script>

<script setup>
const route = useRoute()
import { navResponse } from '~/composables/navResponse'

const menuItems = [
  { label: 'home', to: '/' },
  { label: 'about', to: '/about' },
  { label: 'publications', to: '/publications' },
  { label: 'lectures', to: '/lectures' },
  { label: 'talks', to: '/talks' }
]

const isActive = (path) => route.path === path
</script>