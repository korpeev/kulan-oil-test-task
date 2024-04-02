<template>
    <div
        class="flex flex-col min-h-[178px] w-full relative z-30"
        v-bind="attrs"
    >
        <div class="flex">
            <tab
                @click="currentTab = 'calc-cost'"
                :is-active="currentTab === 'calc-cost'"
                rounded
            >
                Рассчитать стоимость
            </tab>
            <tab
                @click="currentTab = 'call-courier'"
                :is-active="currentTab === 'call-courier'"
            >
                Вызвать курьера
            </tab>
            <tab
                @click="currentTab = 'track-parcel'"
                :is-active="currentTab === 'track-parcel'"
            >
                Отследить посылку
            </tab>
        </div>
        <form
            v-if="currentTab === 'calc-cost'"
            @submit.prevent="onSubmit"
            class="bg-white rounded-bl-[12px] rounded-br-[12px] rounded-tr-[12px] py-[20px] px-[30px] shadow-md"
        >
            <div class="flex max-lg:flex-col max-lg:items-center">
                <div class="flex flex-col gap-[12px] w-[350px]">
                    <app-input
                        is-read-only
                        placeholder="Откуда"
                        :model-value="mapCityNamesById(form.fromCityId)"
                    />
                    <div class="flex flex-wrap gap-[12px]">
                        <tag
                            @click="selectFromCity(city.id)"
                            :is-disabled="
                                cityTagDisabled(form.toCityId, city.id)
                            "
                            v-for="city of CITIES_LIST"
                            :key="city.id"
                            :is-active="city.id === form.fromCityId"
                            >{{ city.address }}</tag
                        >
                    </div>
                </div>

                <button
                    type="button"
                    @click="transferInputValues"
                    class="mx-[10px] self-baseline mt-[15px] max-lg:self-auto max-lg:my-[10px]"
                >
                    <img
                        src="@/assets/icons/transfer-icon.svg"
                        alt="transfer icon"
                    />
                </button>
                <div class="flex flex-col gap-[12px] w-[350px]">
                    <app-input
                        is-read-only
                        placeholder="Куда"
                        :model-value="mapCityNamesById(form.toCityId)"
                    />
                    <div class="flex flex-wrap gap-[12px]">
                        <tag
                            :is-disabled="
                                cityTagDisabled(form.fromCityId, city.id)
                            "
                            @click="selectToCityId(city.id)"
                            v-for="city of CITIES_LIST"
                            :key="city.id"
                            :is-active="city.id === form.toCityId"
                            >{{ city.address }}</tag
                        >
                    </div>
                </div>

                <app-button
                    type="submit"
                    class="self-start w-[276px] ml-[24px] max-md:self-auto max-lg:mt-[24px] max-xl:mt-0 max-lg:ml-0"
                    >Рассчитать стоимость</app-button
                >
            </div>
            <form-calculator-result
                :cost="parsedCost"
                :distance="currentDistance"
                :hour="currentHour"
                :show="resultSuccess"
                @reset-result="resetResult"
            />
            <transition name="fade">
                <div v-if="formErrorMessage.length" class="mt-[24px]">
                    <span class="text-primary">* {{ formErrorMessage }}</span>
                </div>
            </transition>
        </form>
        <form
            v-if="currentTab === 'call-courier'"
            @submit.prevent="onSubmit"
            class="bg-white rounded-bl-[12px] rounded-br-[12px] rounded-tr-[12px] py-[20px] px-[30px] shadow-md"
        >
            <div class="flex max-md:flex-col max-md:items-center">
                <div class="flex flex-col gap-[12px] w-[350px]">
                    <app-input
                        is-read-only
                        placeholder="Откуда"
                        :model-value="mapCityNamesById(form.fromCityId)"
                    />
                    <div class="flex flex-wrap gap-[12px]">
                        <tag
                            @click="selectFromCity(city.id)"
                            :is-disabled="
                                cityTagDisabled(form.toCityId, city.id)
                            "
                            v-for="city of CITIES_LIST"
                            :key="city.id"
                            :is-active="city.id === form.fromCityId"
                            >{{ city.address }}</tag
                        >
                    </div>
                </div>

                <button
                    type="button"
                    @click="transferInputValues"
                    class="mx-[10px] self-baseline mt-[15px] max-md:self-auto max-md:my-[10px]"
                >
                    <img
                        src="@/assets/icons/transfer-icon.svg"
                        alt="transfer icon"
                    />
                </button>
                <div class="flex flex-col gap-[12px] w-[350px]">
                    <app-input
                        is-read-only
                        placeholder="Куда"
                        :model-value="mapCityNamesById(form.toCityId)"
                    />
                    <div class="flex flex-wrap gap-[12px]">
                        <tag
                            :is-disabled="
                                cityTagDisabled(form.fromCityId, city.id)
                            "
                            @click="selectToCityId(city.id)"
                            v-for="city of CITIES_LIST"
                            :key="city.id"
                            :is-active="city.id === form.toCityId"
                            >{{ city.address }}</tag
                        >
                    </div>
                </div>

                <app-button
                    type="submit"
                    class="self-start w-[276px] ml-[24px] max-md:self-auto max-md:mt-[24px] max-lg:mt-0 max-md:ml-0"
                    >Вызвать курьера</app-button
                >
            </div>
            <form-calculator-result
                :cost="parsedCost"
                :distance="currentDistance"
                :hour="currentHour"
                :show="resultSuccess"
                @reset-result="resetResult"
            />
            <transition name="fade">
                <div v-if="formErrorMessage.length" class="mt-[24px]">
                    <span class="text-primary">* {{ formErrorMessage }}</span>
                </div>
            </transition>
        </form>
        <form-calculator-track-parcel-content
            v-if="currentTab === 'track-parcel'"
        />
    </div>
</template>
<script lang="ts" setup>
import { computed, reactive, ref, useAttrs, watch } from 'vue'
import Tab from '@/components/shared/tab.vue'
import AppInput from '@/components/shared/app-input.vue'
import AppButton from '@/components/shared/app-button.vue'
import { CITIES_LIST, DISTANCE_LIST } from '@/constants'
import Tag from '@/components/shared/tag.vue'
import { mapCityNamesById } from '@/utils/mapCityNamesById.ts'
import { calculateNumberOfHoursByDistance } from '@/utils/calculateNumberOfHours.ts'
import { calculateCost } from '@/utils/calculateCost.ts'
import FormCalculatorResult from '@/components/calculator/form-calculator-result.vue'
import FormCalculatorTrackParcelContent from '@/components/calculator/form-calculator-track-parcel-content.vue'

const attrs = useAttrs()

const form = reactive<{
    fromCityId: null | number
    toCityId: null | number
}>({
    fromCityId: null,
    toCityId: null,
})

const currentTab = ref<'calc-cost' | 'call-courier' | 'track-parcel'>(
    'calc-cost'
)

const currentDistance = ref<null | number>(null)
const currentHour = ref<null | number>(null)
const currentCost = ref<null | number>(null)
const formErrorMessage = ref('')

const parsedCost = computed(() =>
    Intl.NumberFormat('ru-RU', { currency: 'RUB' }).format(
        currentCost.value || 0
    )
)
const resultSuccess = computed(
    () => !!currentCost.value && !!currentHour.value && !!currentDistance.value
)

const transferInputValues = () => {
    const to = form.toCityId
    form.toCityId = form.fromCityId
    form.fromCityId = to
}

const cityTagDisabled = (
    selectedCityId: number | null,
    passedCityId: number
) => {
    return typeof selectedCityId === 'number' && selectedCityId === passedCityId
}

const selectFromCity = (cityId: number) => {
    if (cityTagDisabled(form.toCityId, cityId)) return
    form.fromCityId = form.fromCityId === cityId ? null : cityId
}

const selectToCityId = (cityId: number) => {
    if (cityTagDisabled(form.fromCityId, cityId)) return
    form.toCityId = form.toCityId === cityId ? null : cityId
}

const resetResult = () => {
    currentHour.value = null
    currentCost.value = null
    currentDistance.value = null
}

const onSubmit = () => {
    if (!form.toCityId || !form.fromCityId) {
        formErrorMessage.value =
            'Выберите 2 города прежде чем рассчитать стоимость'
        return
    }
    const distance = DISTANCE_LIST.find(
        (distance) =>
            (distance.to === form.toCityId ||
                distance.to === form.fromCityId) &&
            (distance.from === form.fromCityId ||
                distance.from === form.toCityId)
    )?.value

    if (!distance) return
    formErrorMessage.value = ''
    const parsedDistance = Math.floor(distance / 1000)
    currentDistance.value = parsedDistance
    const numberOfHours = calculateNumberOfHoursByDistance(distance)
    currentHour.value = numberOfHours
    currentCost.value = calculateCost({
        numberOfHours,
        distance: parsedDistance,
    })
}

watch(currentTab, () => {
    form.toCityId = null
    form.fromCityId = null
    resetResult()
})
</script>
