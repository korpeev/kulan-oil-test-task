<template>
    <button
        v-bind="attrs"
        class="rounded-[12px] py-[12px] px-[16px] bg-primary text-white"
    >
        <slot />
    </button>
</template>

<script lang="ts" setup>
import { useAttrs } from 'vue'

const attrs = useAttrs()
</script>
