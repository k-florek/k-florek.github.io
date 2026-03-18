<template>
    <header class="splash-main home">
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
    </header>
</template>

<script lang="ts" setup>
definePageMeta({ layout: 'main' })

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