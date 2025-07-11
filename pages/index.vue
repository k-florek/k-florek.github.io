<template>
    <div class="column-container" style="align-items:start;">
        <div>
            <img class="profile-pic" src="assets/images/florek_hs_small_2024.png">
        </div>
        <div>
            <h1>Dr. Kelsey Florek, PhD, MPH</h1>
            <h2>Genomics, Data Science, Public Health</h2>
            <h4 class="link-social" style="padding-top:1rem;">
                <a href="https://github.com/k-florek/"><FontAwesomeIcon :icon="['fab', 'github']" /></a>
                <a href="https://www.linkedin.com/in/kelseyflorek/">&emsp;<FontAwesomeIcon :icon="['fab', 'linkedin']" /></a>
                <a href="https://bsky.app/profile/k-florek.net">&emsp;<FontAwesomeIcon :icon="['fab', 'bluesky']" /></a>
            </h4>
            <h4 class="link-set" style="padding-top:1rem;">
                <a href="about">about</a>
                <a href="publications">publications</a>
                <a href="lectures">lectures</a>
                <a href="talks">talks</a>
            </h4>
        </div>
    </div>
</template>

<script lang="ts" setup>
definePageMeta({ layout: 'main' })

useHead({
    bodyAttrs: {
        class: 'home'
    }
})
</script>