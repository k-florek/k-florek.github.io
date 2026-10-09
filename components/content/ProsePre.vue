<template>
    <div class="code-block">
        <div class="code-header">
            <span class="code-lang">{{ filename || language }}</span>
            <button type="button" class="code-copy" :aria-label="copied ? 'Copied' : 'Copy code'" @click="copy">
                {{ copied ? 'Copied' : 'Copy' }}
            </button>
        </div>
        <pre :class="$props.class"><slot /></pre>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
    code?: string
    language?: string
    filename?: string
    highlights?: number[]
    meta?: string
    class?: string
}>()

const copied = ref(false)

async function copy() {
    await navigator.clipboard.writeText(props.code ?? '')
    copied.value = true
    setTimeout(() => (copied.value = false), 1500)
}
</script>

<style scoped>
.code-block {
    margin: 1.5rem 0;
    background: #161b22;
    border-radius: 6px;
    overflow: hidden;
}

.code-block pre {
    margin: 0;
    padding: 1rem 1.25rem;
    border-radius: 0;
    background: transparent !important;
    color: #c9d1d9;
}

.code-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.35rem 0.75rem;
    background: #0d1117;
    color: #c9d1d9;
    font-size: var(--fs-xs);
}

.code-copy {
    padding: 0.15rem 0.6rem;
    font: inherit;
    color: #c9d1d9;
    background: transparent;
    border: 1px solid #484f58;
    border-radius: 4px;
    cursor: pointer;
    opacity: 0.8;
}

.code-copy:hover,
.code-copy:focus-visible {
    opacity: 1;
}
</style>
