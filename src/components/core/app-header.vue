<template>
    <header class="flex justify-between items-center py-[8px] bg-white">
        <img src="@/assets/logo.svg" alt="logo" />
        <nav class="max-lg:hidden">
            <ul class="flex gap-[20px]">
                <li
                    :class="{
                        'border-r border-gray-200 pr-[20px]': isLastItem(index),
                    }"
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
        <mobile-menu />
    </header>
</template>
<script setup lang="ts">
import MobileMenu from '@/components/shared/mobile-menu.vue'

const menuList = [
    'Главная',
    'Наши преимущества',
    'История Exline',
    'Нам доверяют',
    'Контакты',
]

const links = ['info@exline.kz', '+7 (777) 707 87 77']

const isLastItem = (index: number) => index === menuList.length - 1
</script>
