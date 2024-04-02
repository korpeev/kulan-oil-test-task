interface CalculateCostOptions {
    distance: number
    numberOfHours: number
}
export const calculateCost = (options: CalculateCostOptions) =>
    options.distance * options.numberOfHours
