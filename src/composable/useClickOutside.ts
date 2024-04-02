import { onBeforeUnmount, onMounted, Ref } from 'vue'

export const useClickOutside = (
    ref: Ref<HTMLElement | null>,
    cb: () => void
) => {
    const clickHandler = (event: MouseEvent) => {
        if (ref.value && !ref.value.contains(event.target as Node)) {
            cb()
        }
    }

    onMounted(() => {
        document.addEventListener('mousedown', clickHandler)
    })

    onBeforeUnmount(() => {
        document.removeEventListener('mousedown', clickHandler)
    })
}
