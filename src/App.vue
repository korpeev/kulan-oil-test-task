<template>
    <div class="container max-w-[1180px] mx-auto max-xl:px-4">
        <app-header />
    </div>
    <main-section />
    <div
        class="container max-w-[1180px] mx-auto max-xl:px-4 relative -top-[100px]"
    >
        <form-calculator />
    </div>

    <div class="container max-w-[1180px] mx-auto max-xl:px-4">
        <benefits />
        <history />
        <partners />
    </div>
    <contacts />
    <app-footer />
</template>
<script setup lang="ts">
import AppHeader from '@/components/core/app-header.vue'
import MainSection from '@/components/sections/main-section.vue'
import Benefits from '@/components/sections/benefits.vue'
import FormCalculator from '@/components/calculator/form-calculator.vue'
import History from '@/components/sections/history.vue'
import Partners from '@/components/sections/partners.vue'
import Contacts from '@/components/sections/contacts.vue'
import AppFooter from '@/components/core/app-footer.vue'
</script>
