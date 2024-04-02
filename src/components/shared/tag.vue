<template>
    <button
        type="button"
        class="rounded-[12px] py-[6px] px-[12px] cursor-pointer"
        :class="{
            'bg-primary text-white': isActive,
            'bg-[#f6f6f6]': !isActive,
            'opacity-50': isDisabled,
        }"
    >
        <slot />
    </button>
</template>
<script lang="ts" setup>
interface Props {
    isActive?: boolean
    isDisabled?: boolean
}
defineProps<Props>()
</script>
