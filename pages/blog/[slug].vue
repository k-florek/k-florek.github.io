<template>
    <div v-if="post">
        <div v-if="post.cover" class="blog-hero" :style="{ backgroundImage: `url(${post.cover})` }">
            <div class="blog-hero-frame">
                <div class="blog-hero-text">
                    <h1 class="blog-hero-title">{{ post.title }}</h1>
                    <p class="blog-hero-date">{{ formatDate(post.date) }}</p>
                    <p v-if="post.description" class="blog-hero-description">{{ post.description }}</p>
                    <p v-if="post.tags?.length" class="blog-hero-tags">{{ post.tags.join(' • ') }}</p>
                </div>
            </div>
        </div>
        <div class="content-container">
            <article class="content-items blog-post">
                <div v-if="!post.cover" class="blog-header-no-cover">
                    <p class="blog-date">{{ formatDate(post.date) }}</p>
                    <h1>{{ post.title }}</h1>
                </div>
                <p v-if="!post.cover && post.description" class="blog-description">{{ post.description }}</p>
                <p v-if="!post.cover && post.tags?.length" class="blog-tags">{{ post.tags.join(' • ') }}</p>
                <ContentRenderer :value="post" class="blog-body" />
            </article>
        </div>
    </div>
</template>

<script lang="ts" setup>
const route = useRoute()
const slug = String(route.params.slug || '')

const { data: post } = await useAsyncData(`blog-${slug}`, () => {
    return queryCollection('blog')
        .where('draft', '=', false)
        .where('path', '=', `/blog/${slug}`)
        .first()
})

if (!post.value) {
    throw createError({ statusCode: 404, statusMessage: 'Post not found' })
}

useSeoMeta({
    title: post.value.title,
    description: post.value.description,
    ogTitle: `${post.value.title} | Dr. Kelsey Florek`,
    ogDescription: post.value.description,
    ogType: 'article'
})

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
/* ── Hero ── */
.blog-hero {
    position: relative;
    width: 100%;
    height: 100svh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

.blog-hero-frame {
    position: absolute;
    inset: 1.5rem;
    border: 1px solid rgba(255, 255, 255, 0.55);
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding-bottom: 6rem;
}

.blog-hero-text {
    text-align: center;
    color: #fff;
    text-shadow: 0 2px 16px rgba(0, 0, 0, 0.35);
}

.blog-hero-title {
    font-family: 'Quattrocento', serif;
    font-size: var(--fs-title);
    font-weight: normal;
    line-height: 1.1;
    margin: 0 0 0.6rem;
    color: #fff;
}

.blog-hero-date {
    font-family: 'QuattrocentoSans', sans-serif;
    font-size: var(--fs-sm);
    letter-spacing: 0.22em;
    text-transform: uppercase;
    margin: 0 0 1rem;
    opacity: 0.9;
}

.blog-hero-description {
    font-family: 'QuattrocentoSans', sans-serif;
    font-size: var(--fs-md);
    margin: 0 auto 0.5rem;
    opacity: 0.9;
    max-width: 60ch;
}

.blog-hero-tags {
    font-size: var(--fs-sm);
    letter-spacing: 0.12em;
    text-transform: uppercase;
    margin: 0;
    opacity: 0.75;
}

/* ── Post body ── */
.blog-post {
    max-width: 900px;
    margin: 0 auto;
    padding-top: 4rem;
    padding-bottom: 4rem;
}

.blog-header-no-cover {
    margin-bottom: 1.5rem;
}

.blog-date {
    margin-bottom: 0.8rem;
    opacity: 0.8;
}

.blog-description {
    margin-top: 1.5rem;
    margin-bottom: 1rem;
    font-size: var(--fs-xl);
}

.blog-tags {
    margin-bottom: 1.2rem;
    font-size: var(--fs-base);
    opacity: 0.75;
}

/* ── Blog body headings ── */
.blog-body :deep(h1),
.blog-body :deep(h2),
.blog-body :deep(h3),
.blog-body :deep(h4),
.blog-body :deep(h5),
.blog-body :deep(h6) {
    color: var(--dark);
    margin-top: 2.5rem;
    margin-bottom: 1rem;
}

.blog-body :deep(h1) a,
.blog-body :deep(h2) a,
.blog-body :deep(h3) a,
.blog-body :deep(h4) a,
.blog-body :deep(h5) a,
.blog-body :deep(h6) a {
    color: inherit;
}
</style>
