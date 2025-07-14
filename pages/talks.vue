<template>
  <div class='content-container'>
    <div class='content-items'>
      <div class='content-title'>talks: sharing insights at the intersection of science and public health</div>
      <div v-for="talk in talks" :key="talk.title">
        <Card :card=talk />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { data: talks } = await useAsyncData('talks', () => {
  return queryCollection('talks')
    .order('date', 'DESC')
    .where('date','>','2024-06-01')
    .all()
})
</script>