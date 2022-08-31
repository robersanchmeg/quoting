export function getDifferenceYear(year) {
    return new Date().getFullYear() - year
}

export function calculateMarca(marca) {
    let incremento

    switch (marca) {
        case "1":
            incremento = 1.30
            break
        case "2":
            incremento = 1.15
            break
        case "3":
            incremento = 1.05
            break
        default:
            break
    }

    return incremento
}

export function calculatePlan(plan) {
    return (plan === "1") ? 1.20 : 1.50
}

export function formattMoney(result) {
    return result.toLocaleString('es-ES', {
        style: 'currency',
        currency: "EUR"
    })
}