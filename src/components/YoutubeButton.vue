<template>
    <a :href="href"
     target="_blank"
     class="mt-3 px-3 py-2 rounded border-2 bg-red-500 border-red-600 hover:bg-red-600 text-white transition-colors">
    <slot></slot>
    </a>
</template>

<script setup>
    const props = defineProps({
        href: String
    })
</script>