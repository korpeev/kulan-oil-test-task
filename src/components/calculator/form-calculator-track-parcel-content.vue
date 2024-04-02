<template>
    <div
        class="w-full flex gap-[24px] bg-white rounded-bl-[12px] rounded-br-[12px] rounded-tr-[12px] py-[20px] px-[30px] shadow-md max-md:flex-col"
    >
        <app-input class="w-1/2 max-md:w-full" model-value="" />
        <app-button class="w-1/2 max-md:w-full">Отследить посылку</app-button>
    </div>
</template>
<script setup lang="ts">
import AppInput from '@/components/shared/app-input.vue'
import AppButton from '@/components/shared/app-button.vue'
</script>
