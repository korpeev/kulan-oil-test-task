<template>
    <teleport to="body">
        <transition name="slide-left">
            <div
                ref="menuContainerRef"
                v-if="mobileMenuOpen"
                class="max-lg:block hidden fixed right-0 top-[8px] h-screen bg-white p-8 shadow-2xl"
            >
                <button
                    @click="mobileMenuOpen = false"
                    class="absolute right-3 top-3 text-[24px]"
                >
                    &times;
                </button>
                <nav class="relative">
                    <ul class="flex flex-col gap-[20px]">
                        <li
                            class="cursor-pointer"
                            v-for="(menuItem, index) of menuList"
                            :key="index"
                        >
                            {{ menuItem }}
                        </li>
                        <li class="text-link" v-for="link of links" :key="link">
                            <a href="#">{{ link }}</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </transition>
    </teleport>

    <button
        @click="mobileMenuOpen = true"
        class="max-lg:flex hidden flex-col gap-1"
    >
        <div class="w-[20px] h-[2px] bg-black" />
        <div class="w-[20px] h-[2px] bg-black" />
        <div class="w-[20px] h-[2px] bg-black" />
    </button>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import { useClickOutside } from '@/composable/useClickOutside.ts'

const mobileMenuOpen = ref(false)
const menuContainerRef = ref<null | HTMLElement>(null)
useClickOutside(menuContainerRef, () => {
    mobileMenuOpen.value = false
})
const menuList = [
    'Главная',
    'Наши преимущества',
    'История Exline',
    'Нам доверяют',
    'Контакты',
]

const links = ['info@exline.kz', '+7 (777) 707 87 77']

watch(mobileMenuOpen, (value) => {
    document.body.style.overflow = value ? 'hidden' : 'unset'
})
</script>

<style lang="css" scoped>
.slide-left-enter-active {
    animation: slide-left 0.5s ease;
}
.slide-left-leave-active {
    animation: slide-left 0.2s ease reverse;
}

@keyframes slide-left {
    from {
        transform: translateX(100%);
    }
    to {
        transform: translateX(0%);
    }
}
</style>
