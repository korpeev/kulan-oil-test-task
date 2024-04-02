<template>
    <div class="mt-[30px]">
        <h1 class="text-[24px] leading-[24px] font-black">Нам доверяют</h1>
        <div class="partners-list">
            <img src="@/assets/img/technodom.png" alt="" />
            <img src="@/assets/img/kaspi.png" alt="" />
            <img src="@/assets/img/astana-motors.png" alt="" />
            <img src="@/assets/img/zepter.png" alt="" />
            <img src="@/assets/img/gazprom.png" alt="" />
            <img src="@/assets/img/philip-moris.png" alt="" />
            <img src="@/assets/img/kaztrans.png" alt="" />
            <img src="@/assets/img/microsoft.png" alt="" />
        </div>
    </div>
</template>
<script setup lang="ts"></script>
<style>
.partners-list {
    margin-top: 30px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(258px, 1fr));
    @media screen and (max-width: 550px) {
        grid-template-columns: 1fr;
        justify-items: center;
        gap: 24px;
    }
}
</style>
