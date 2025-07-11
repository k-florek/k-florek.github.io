<template>
  <div class='content-container'>
    <div class='content-items'>
      <div class='content-title'>lectures</div>
      <div
        v-for="lecture in lectures"
        :key="lecture.title"
        class="card"
      >
      
        <NuxtLink :to="lecture.url">
          <div>
            <h3>{{ lecture.title }}</h3>
            <p>{{ formatDate(lecture.date) }}</p>
            <p>{{ lecture.subtitle }}</p>
          </div>
        </NuxtLink>
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

function formatDate(date: string | Date) {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(new Date(date))
}
</script>