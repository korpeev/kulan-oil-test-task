<template>
    <transition name="fade">
        <div v-if="show" class="flex justify-between mt-[24px]">
            <div class="flex gap-[24px] flex-wrap">
                <div class="flex gap-[8px]">
                    <img
                        src="@/assets/icons/distance-icon.svg"
                        alt="distance icon"
                    />
                    <span>Расстояние:</span>
                    <span class="font-black">{{ distance }} км</span>
                </div>
                <div class="flex gap-[8px]">
                    <img src="@/assets/icons/clock-icon.svg" alt="clock icon" />
                    <span>Время:</span>
                    <span class="font-black">{{ hour }} ч</span>
                </div>
                <div class="flex gap-[8px]">
                    <img src="@/assets/icons/cost-icon.png" alt="cost icon" />
                    <span>Стоимость:</span>
                    <span class="font-black">{{ cost }} ₸</span>
                </div>
            </div>
            <button
                @click="emit('reset-result')"
                type="button"
                class="text-primary"
            >
                Сбросить
            </button>
        </div>
    </transition>
</template>
<script lang="ts" setup>
interface Props {
    show?: boolean
    distance: number | null
    hour: number | null
    cost: number | string | null
}
interface FormCalculatorResultEmit {
    (event: 'reset-result'): void
}

const emit = defineEmits<FormCalculatorResultEmit>()
defineProps<Props>()
</script>
