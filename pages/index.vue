<template>
    <header class="splash-main home">
        <div>
            <img class="profile-pic" src="assets/images/florek_hs_small_2024.png" alt="Profile photo of Dr. Kelsey Florek">
        </div>
        <div>
            <h2>Dr. Kelsey Florek, PhD, MPH</h2>
            <h3>Genomics, Data Science, Public Health</h3>
            <div class="link-social" style="padding-top:1rem;">
                <a href="https://github.com/k-florek/" aria-label="GitHub"><FontAwesomeIcon :icon="['fab', 'github']" /></a>
                <a href="https://www.linkedin.com/in/kelseyflorek/" aria-label="LinkedIn">&emsp;<FontAwesomeIcon :icon="['fab', 'linkedin']" /></a>
                <a href="https://bsky.app/profile/k-florek.net" aria-label="Bluesky">&emsp;<FontAwesomeIcon :icon="['fab', 'bluesky']" /></a>
            </div>
            <div class="link-set" style="padding-top:1rem;" ref="linkSet" @mouseleave="hideIndicator">
                <a href="about" @mouseenter="moveIndicator">about</a>
                <a href="publications" @mouseenter="moveIndicator">publications</a>
                <a href="lectures" @mouseenter="moveIndicator">lectures</a>
                <a href="talks" @mouseenter="moveIndicator">talks</a>
            </div>
        </div>
    </header>
</template>

<script lang="ts" setup>
definePageMeta({ layout: 'main' })

const linkSet = ref<HTMLElement | null>(null)

function moveIndicator(e: MouseEvent) {
    const container = linkSet.value
    const link = e.currentTarget as HTMLElement
    if (!container) return
    container.style.setProperty('--ind-left', link.offsetLeft + 'px')
    container.style.setProperty('--ind-width', link.offsetWidth + 'px')
    container.style.setProperty('--ind-opacity', '1')
}

function hideIndicator() {
    linkSet.value?.style.setProperty('--ind-opacity', '0')
}

const description = 'Dr. Kelsey Florek is a Senior Genomics and Data Scientist at the Wisconsin State Laboratory of Hygiene, specializing in genomics, bioinformatics, data science, and public health.'

useSeoMeta({
    title: 'Dr. Kelsey Florek',
    description,
    ogTitle: 'Dr. Kelsey Florek – Genomics & Data Science',
    ogDescription: description,
    ogUrl: 'https://k-florek.net',
    ogImage: 'https://k-florek.net/florek_hs_small_2024.png',
    ogType: 'website',
})

useHead({
    titleTemplate: null,
    bodyAttrs: { class: 'splash-main' },
    script: [{
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Dr. Kelsey Florek',
            jobTitle: 'Senior Genomics and Data Scientist',
            worksFor: {
                '@type': 'Organization',
                name: 'Wisconsin State Laboratory of Hygiene',
                url: 'https://www.slh.wisc.edu/'
            },
            url: 'https://k-florek.net',
            image: 'https://k-florek.net/florek_hs_small_2024.png',
            sameAs: [
                'https://github.com/k-florek/',
                'https://www.linkedin.com/in/kelseyflorek/',
                'https://bsky.app/profile/k-florek.net'
            ],
            knowsAbout: ['Genomics', 'Bioinformatics', 'Public Health', 'Data Science', 'Epidemiology']
        })
    }]
})
</script>