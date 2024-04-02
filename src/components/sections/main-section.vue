<template>
    <section
        class="min-h-[480px] bg-custom-gray flex items-center justify-between overflow-hidden"
    >
        <app-button class="ml-[10%]">
            <img src="@/assets/icons/chevron.svg" alt="chevron right" />
        </app-button>

        <div class="container max-w-[1180px] mx-auto max-xl:px-4">
            <div
                class="flex justify-between items-center max-lg:flex-col max-lg:mt-[40px]"
            >
                <div class="flex flex-col max-w-[415px] gap-[16px]">
                    <h1 class="text-[28px] leading-[24px] font-black">
                        Внутригородская доставка
                    </h1>
                    <p class="text-[14px]">
                        Курьерская служба Exline предлагает Вашему вниманию
                        услуги по внутригородской доставке отправлений во всех
                        областных центрах Республики Казахстан
                    </p>
                    <app-button class="w-[200px] mt-[8px]"
                        >Подробнее</app-button
                    >
                </div>
                <div class="relative max-lg:mt-[20px]">
                    <img
                        class="absolute -right-[48%] max-lg:right-0"
                        src="@/assets/img/elipse.png"
                        alt="elipse"
                    />
                    <img
                        class="relative z-20"
                        src="@/assets/img/car.png"
                        alt="car"
                    />
                </div>
            </div>
        </div>
        <app-button class="mr-[10%] relative z-20">
            <img
                class="rotate-180"
                src="@/assets/icons/chevron.svg"
                alt="chevron right"
            />
        </app-button>
    </section>
</template>
<script setup lang="ts">
import AppButton from '@/components/shared/app-button.vue'
</script>
