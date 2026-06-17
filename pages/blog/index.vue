<template>
    <div class="content-container">
        <div class="content-items">
            <div class="content-title">blogs: an eclectic collection of thoughts and ideas</div>
            <NuxtLink v-for="post in posts" :key="post.path" :to="`/blog/${resolveSlug(post)}`">
                <article class="card blog-card">
                    <h4>{{ post.title }}</h4>
                    <p class="blog-date">{{ formatDate(post.date) }}</p>
                    <p>{{ post.description }}</p>
                    <p v-if="post.tags?.length" class="blog-tags">{{ post.tags.join(' • ') }}</p>
                </article>
            </NuxtLink>
        </div>
    </div>
</template>

<script lang="ts" setup>
useSeoMeta({
    title: 'Blog',
    description: 'Short blog posts by Dr. Kelsey Florek on genomics, bioinformatics, and public health practice.',
    ogTitle: 'Blog | Dr. Kelsey Florek',
    ogDescription: 'Short blog posts on genomics, bioinformatics, and public health practice.',
    ogUrl: 'https://k-florek.net/blog',
    ogType: 'website'
})

const { data: posts } = await useAsyncData('blog-posts', () => {
    return queryCollection('blog')
        .where('draft', '=', false)
        .order('date', 'DESC')
        .all()
})

function resolveSlug(post: { path: string }) {
    return post.path.split('/').pop() ?? ''
}

function formatDate(date: string | Date, timeZone = 'UTC') {
    return new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timeZone
    }).format(new Date(date))
}
</script>

<style scoped>
.blog-card {
    color: var(--dark);
}

.blog-date {
    margin: 0.6rem 0;
    opacity: 0.8;
}

.blog-tags {
    margin-top: 0.8rem;
    font-size: var(--fs-base);
    opacity: 0.75;
}
</style>
