<template>
    <div
        :class="{
            'bg-white text-primary': isActive,
            'rounded-tl-[12px]': rounded,
        }"
        class="bg-custom-gray cursor-pointer shadow text-black py-[15px] px-[20px]"
    >
        <slot />
    </div>
</template>

<script lang="ts" setup>
interface Props {
    isActive?: boolean
    rounded?: boolean
}

withDefaults(defineProps<Props>(), {
    isActive: false,
    rounded: false,
})
</script>
