<template>
    <div class="site-layout">
        <div style="padding-top: 25px">
            <NavMenu />
        </div>
        <main>
            <slot />
        </main>
        <footer class="site-footer">
            <small>© {{ new Date().getFullYear() }} Dr. Kelsey Florek</small>
            <nav aria-label="Social links">
                <a href="https://github.com/k-florek/" aria-label="GitHub"><FontAwesomeIcon :icon="['fab', 'github']" /></a>
                <a href="https://www.linkedin.com/in/kelseyflorek/" aria-label="LinkedIn"><FontAwesomeIcon :icon="['fab', 'linkedin']" /></a>
                <a href="https://bsky.app/profile/k-florek.net" aria-label="Bluesky"><FontAwesomeIcon :icon="['fab', 'bluesky']" /></a>
            </nav>
        </footer>
    </div>
</template>

<script setup>
import NavMenu from '~/components/NavMenu.vue'
</script>

<style scoped>
.site-layout {
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - clamp(1rem, 6vw, 4rem));
}

main {
    flex: 1;
    padding-top: 150px;
}

.site-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    margin-top: 3rem;
    padding: 1.25rem 0;
    border-top: var(--border-width) solid var(--dark);
}

.site-footer small {
    font-size: var(--fs-sm);
}

.site-footer nav {
    display: flex;
    gap: 1rem;
}

.site-footer a {
    color: var(--dark);
}

.site-footer a:hover {
    color: var(--color-02);
}

@media (max-width: 480px) {
    .site-footer {
        align-items: flex-start;
        flex-direction: column;
    }
}
</style>
