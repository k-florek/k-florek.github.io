<template>
  <NuxtLink :to="card.url" external>
    <div class="card">
      <h4>{{ card.title }}</h4>
      <br>
      <p v-if="card.subtitle">{{ card.subtitle }}</p>
      <p v-if="card.journal"><i>{{ card.journal}}</i> {{ card.j_info }}</p>
      <p v-if="card.subtitle">{{ formatDate(card.date) }}</p>
    </div>
  </NuxtLink>
</template>

<script lang="ts" setup>
type Card = {
    title: string,
    date: string,
    url: string,
    subtitle?: string,
    journal?: string,
    j_info?: string
  }

defineProps<{
  card: Card
}>()


function formatDate(date: string | Date) {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(new Date(date))
}
</script>