const REFERENCE_BASE_PRODUCTION = 2500

export const setState = (prevState, newState) => Object.assign(prevState, newState)

export const toggleMutationButton = (state, { line, column }) => state.buttonsState.mutationButtons[line][column] = !state.buttonsState.mutationButtons[line][column]

export const toggleBirthButton = (state, sex) => {
    state.buttonsState.birthButtons[sex] = !state.buttonsState.birthButtons[sex]
}

export const registerCow = (state, { name, numberOfAlleles }) => {
    const sexSuffixes = {
        male: 1,
        female: 2
    }
    state.cowPlayer.name = name
    state.cowPlayer.baseProduction = Math.floor(REFERENCE_BASE_PRODUCTION / numberOfAlleles)
    state.cowPlayer.mutationsRemaining = numberOfAlleles
    for (let index = 0; index < numberOfAlleles; index++) {
        const letter = String.fromCharCode(65 + index)

        Object.entries(sexSuffixes).forEach(([sex, sexSuffixes]) => {
            state.cowPlayer.alleles[sex].push({
                alleleName: `${letter}${sexSuffixes}`,
                production: 0,
                hasMutated: false
            })
        });

    }
    state.cowPlayer.born = false
}

export const born = (state) => state.cowPlayer.born = true

export const hasMutated = (state, { index, sex }) => {
    switch (sex) {
        case "Male":
            return state.cowPlayer.alleles.maleOrigin[index].hasMutated

        case "Female":
            return state.cowPlayer.alleles.femaleOrigin[index].hasMutated

        default:
            break;
    }
}

export const randomizeAlleleProduction = (state, { sex }) => {

    state.cowPlayer.alleles[sex].forEach(allele => {
        const alleleProductionChoices = [state.cowPlayer.baseProduction, state.cowPlayer.baseProduction * 2]
        const alleleProduction = alleleProductionChoices[Math.floor(Math.random() * alleleProductionChoices.length)]

        allele.production = alleleProduction
    });
}

export const setAlleleProduction = (state, { index, amount, sex }) => {
    if (sex === "Male") {
        state.cowPlayer.alleles.maleOrigin[index].production = amount
        state.cowPlayer.alleles.maleOrigin[index].hasMutated = true
    } else if (sex === "Female") {
        state.cowPlayer.alleles.femaleOrigin[index].production = amount
        state.cowPlayer.alleles.femaleOrigin[index].hasMutated = true
    }
    state.cowPlayer.mutationsRemaining -= 1
    console.log("I: ", index, "P: ", amount, "S: ", sex, "- Vuex Mutation")
}

export const multiplyAlleleProduction = (state, { index, multiplyingFactor, sex }) => {
    if (sex === "Male") {
        state.cowPlayer.alleles.maleOrigin[index].production = state.cowPlayer.alleles.maleOrigin[index].production * multiplyingFactor
        state.cowPlayer.alleles.maleOrigin[index].hasMutated = true
    } else if (sex === "Female") {
        state.cowPlayer.alleles.femaleOrigin[index].production = state.cowPlayer.alleles.femaleOrigin[index].production * multiplyingFactor
        state.cowPlayer.alleles.femaleOrigin[index].hasMutated = true
    }
    state.cowPlayer.mutationsRemaining -= 1
    console.log("I: ", index, "MF: ", multiplyingFactor, "S: ", sex)
}

export const applyMutation = (state, { allele, operator, position }) => {
    state.cowPlayer.alleles[allele.sex][allele.index].production = operator.fn(allele.production)
    state.cowPlayer.alleles[allele.sex][allele.index].hasMutated = true
    state.cowPlayer.activeMutations = [...state.cowPlayer.activeMutations, { operator: { ...operator, name: operator.name(allele) }, allele, position }]
    state.cowPlayer.mutationsRemaining -= 1
}





