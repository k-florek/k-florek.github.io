<template>
    <figure class="blog-figure">
        <img :src="src" :alt="alt || ''" loading="lazy" />
        <figcaption v-if="$slots.default" class="blog-figure-caption">
            <slot mdc-unwrap="p" />
        </figcaption>
    </figure>
</template>

<script setup lang="ts">
defineProps<{ src: string; alt?: string }>()
</script>

<style scoped>
.blog-figure {
    margin: 2rem auto;
    text-align: center;
}

.blog-figure img {
    max-width: 100%;
    height: auto;
}

.blog-figure-caption {
    margin-top: 0.6rem;
    font-size: var(--fs-sm);
    opacity: 0.75;
}
</style>
