<template>
  <div class='content-container'>
    <div class='content-items'>
      <div class='content-title'>publications</div>
      <div v-for="publication in publications" :key="publication.title">
        <Card :card=publication />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { data: publications } = await useAsyncData('publications', () => {
  return queryCollection('publications')
    .order('date', 'DESC')
    .all()
})
</script>