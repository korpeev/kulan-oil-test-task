import { CITIES_LIST } from '@/constants'

export const mapCityNamesById = (cityId: number | null) => {
    return (
        CITIES_LIST.find((city) => cityId !== null && city.id === cityId)
            ?.address ?? ''
    )
}
