<template>
  <div class='content-container'>
    <div class='content-items'>
      <div class='content-title'>publications: advancing science through data and discovery</div>
      <div v-for="publication in publications" :key="publication.title">
        <Card :card=publication />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
useSeoMeta({
    title: 'Publications',
    description: 'Peer-reviewed publications by Dr. Kelsey Florek covering genomics, epidemiology, infectious disease surveillance, and public health bioinformatics.',
    ogTitle: 'Publications | Dr. Kelsey Florek',
    ogDescription: 'Peer-reviewed publications covering genomics, epidemiology, infectious disease surveillance, and public health bioinformatics.',
    ogUrl: 'https://k-florek.net/publications',
    ogType: 'website',
})

const { data: publications } = await useAsyncData('publications', () => {
  return queryCollection('publications')
    .order('date', 'DESC')
    .all()
})
</script>