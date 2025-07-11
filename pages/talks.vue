<template>
  <div class='content-container'>
    <div class='content-items'>
      <div class='content-title'>talks: recent presentations</div>
      <div
        v-for="talk in talks"
        :key="talk.title"
        class="card"
      >
      
        <NuxtLink :to="talk.url">
          <div>
            <h3>{{ talk.title }}</h3>
            <p>{{ formatDate(talk.date) }}</p>
            <p>{{ talk.subtitle }}</p>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { data: talks } = await useAsyncData('talks', () => {
  return queryCollection('talks')
    .where({
      date: {
        $gt: '2000-01-01'
      }
    })
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