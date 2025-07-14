<template>
  <div class='content-container'>
    <div class='content-items'>
      <div class='content-title'>lectures</div>
      <div v-for="lecture in lectures" :key="lecture.title">
        <Card :card=lecture />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { data: lectures } = await useAsyncData('lectures', () => {
  return queryCollection('lectures')
    .order('date', 'DESC')
    .all()
})
</script>