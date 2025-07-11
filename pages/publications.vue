<template>
  <div class='content-container'>
    <div class='content-items'>
      <div class='content-title'>publications</div>
      <div
        v-for="publication in publications"
        :key="publication.title"
        class="card"
      >
      
        <NuxtLink :to="publication.url">
          <div>
            <h3>{{ publication.title }}</h3>
            <p><i>{{ publication.journal}}</i> {{ publication.j_info }}</p>
          </div>
        </NuxtLink>
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