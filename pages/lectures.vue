<template>
  <div class='content-container'>
    <div class='content-items'>
      <div class='content-title'>lectures: continuous learning in bioinformatics</div>
      <div v-for="lecture in lectures" :key="lecture.title">
        <Card :card=lecture />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
useSeoMeta({
    title: 'Lectures',
    description: 'Educational lectures by Dr. Kelsey Florek on bioinformatics, genomics tools, and public health data science for the public health community.',
    ogTitle: 'Lectures | Dr. Kelsey Florek',
    ogDescription: 'Educational lectures on bioinformatics, genomics tools, and public health data science for the public health community.',
    ogUrl: 'https://k-florek.net/lectures',
    ogType: 'website',
})

const { data: lectures } = await useAsyncData('lectures', () => {
  return queryCollection('lectures')
    .order('date', 'DESC')
    .all()
})
</script>