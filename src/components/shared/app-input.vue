<template>
    <div
        v-bind="attrs"
        @click="inputRef?.focus()"
        class="relative flex border-input-border border rounded-[12px] focus-within:border-black py-[12px] px-[16px] cursor-text"
    >
        <img src="@/assets/icons/search.svg" alt="search" class="mr-[12px]" />
        <input
            :placeholder="placeholder"
            :readonly="isReadOnly"
            ref="inputRef"
            v-model="model"
            type="text"
            class="bg-transparent focus:outline-none w-full text-[18px] font-mulish"
        />
    </div>
</template>

<script lang="ts" setup>
import { computed, ref, useAttrs } from 'vue'

interface InputEmits {
    (event: 'update:modelValue', payload: string): void
}
interface Props {
    modelValue: string
    isReadOnly?: boolean
    placeholder?: string
}
const emit = defineEmits<InputEmits>()
const props = defineProps<Props>()
const attrs = useAttrs()

const inputRef = ref<null | HTMLInputElement>(null)

const model = computed({
    get() {
        return props.modelValue
    },
    set(newValue: string) {
        emit('update:modelValue', newValue)
    },
})
</script>
