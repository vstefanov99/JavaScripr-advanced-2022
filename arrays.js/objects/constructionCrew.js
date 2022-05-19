function asd(input) {
    if (input.dizziness) {
        input.levelOfHydrated += (0.1 * input.weight) * input.experience
        input.dizziness = false
        return input
    } else {
        return input
    }
}
asd({ weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true })
asd({ weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true })