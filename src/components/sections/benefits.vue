<template>
    <section class="-mt-[40px] py-[30px]">
        <h1 class="text-[24px] leading-[24px] font-black">Наши преимущества</h1>
        <div class="card-list">
            <div
                class="bg-custom-gray flex flex-col items-center pt-[20px] pb-[40px] rounded-[12px]"
            >
                <img src="@/assets/img/benefits-car.svg" alt="benefits car" />
                <span
                    class="text-[16px] inline-block mt-[20px] leading-[20px] font-mulish font-bold"
                    >Быстрая доставка</span
                >
            </div>
            <div
                class="bg-custom-gray flex flex-col items-center pt-[20px] px-[16px] text-center pb-[40px] rounded-[12px]"
            >
                <img
                    src="@/assets/img/benefits-location.svg"
                    alt="benefits location"
                />
                <span
                    class="text-[16px] inline-block mt-[20px] leading-[20px] font-mulish font-bold"
                    >Доставим в любую точку города и области</span
                >
            </div>
            <div
                class="bg-custom-gray flex flex-col items-center pt-[20px] pb-[40px] rounded-[12px]"
            >
                <img src="@/assets/img/benefits-hour.svg" alt="benefits hour" />
                <span
                    class="text-[16px] inline-block mt-[20px] leading-[20px] font-mulish font-bold"
                    >Ежедневные отправки</span
                >
            </div>
            <div
                class="bg-custom-gray flex flex-col items-center pt-[20px] pb-[40px] rounded-[12px]"
            >
                <img
                    src="@/assets/img/benefits-stock.svg"
                    alt="benefits stock"
                />
                <span
                    class="text-[16px] inline-block mt-[20px] leading-[20px] font-mulish font-bold"
                    >Собственный склад
                </span>
            </div>
        </div>
    </section>
</template>

<style>
.card-list {
    margin-top: 30px;
    display: grid;
    gap: 24px;
    grid-template-columns: repeat(4, 1fr);
    @media screen and (max-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media screen and (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 480px) {
        grid-template-columns: repeat(1, 1fr);
    }
}
</style>
<script setup lang="ts"></script>
