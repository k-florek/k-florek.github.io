<template>
  <nav class="nav-bar glass">
    <div class="column-container" style="justify-content: space-between">
      <div class="nav-title">Kelsey Florek</div>
      <div class="nav-items">
        <div class="nav-links" id="nav-links" ref="navLinks" @mouseleave="hideIndicator">
          <NuxtLink
            v-for="(item, index) in menuItems"
            :key="index"
            :to="item.to"
            @mouseenter="moveIndicator">
            {{ item.label }}
          </NuxtLink>
          <a href="javascript:void(0);" class="icon" aria-label="Toggle navigation" @click="navResponse">
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

const navLinks = ref(null)

function moveIndicator(e) {
  const container = navLinks.value
  const link = e.currentTarget
  if (!container) return
  container.style.setProperty('--ind-left', link.offsetLeft + 'px')
  container.style.setProperty('--ind-width', link.offsetWidth + 'px')
  container.style.setProperty('--ind-opacity', '1')
}

function hideIndicator() {
  navLinks.value?.style.setProperty('--ind-opacity', '0')
}
</script>