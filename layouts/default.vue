<template>
    <div style="padding-top: 25px">
        <NavMenu />
    </div>
    <main style="padding-top: 48px">
        <slot />
    </main>
</template>

<script setup>
import NavMenu from '~/components/NavMenu.vue'
</script>
