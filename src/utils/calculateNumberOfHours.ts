const NUMBER_HOURS_MAP = {
    LESS_100_KM: 24,
    BETWEEN_100_499_KM: 48,
    GREATER_500_KM: 96,
}
export const calculateNumberOfHoursByDistance = (distance: number) => {
    if (distance < 100_000) return NUMBER_HOURS_MAP.LESS_100_KM
    if (distance >= 100_000 && distance < 499_999)
        return NUMBER_HOURS_MAP.BETWEEN_100_499_KM
    return NUMBER_HOURS_MAP.GREATER_500_KM
}
