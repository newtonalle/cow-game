const REFERENCE_BASE_PRODUCTION = 2500

export const setState = (prevState, newState) => {
    Object.assign(prevState, newState)
    console.log(prevState, newState)
}

export const setGamemode = (state, gamemode) => {
    state.game.currentGamemode = gamemode
}

export const setCurrentStage = (state, stage) => state.game.currentStage = stage

export const registerGame = (state, { cowPlayers, numberOfGenes }) => {

    state.game.hasRegistered = true
    state.game.cowPlayers = cowPlayers
    state.game.baseProduction = Math.floor(REFERENCE_BASE_PRODUCTION / numberOfGenes)

    for (let indexPlayers = 0; indexPlayers < state.game.cowPlayers.length; indexPlayers++) {
        state.game.cowPlayers[indexPlayers].mutationsRemaining = numberOfGenes

        const sexSuffixes = {
            male: "♂",
            female: "♀"
        }

        for (let indexGenes = 0; indexGenes < numberOfGenes; indexGenes++) {
            const letter = String.fromCharCode(65 + indexGenes)

            Object.entries(sexSuffixes).forEach(([sex, sexSuffixes]) => {
                state.game.cowPlayers[indexPlayers].alleles[sex].push({
                    alleleName: `${letter}${sexSuffixes}`,
                    production: 0,
                    hasMutated: false
                })
            });

        }
    }
}

export const nextCow = (state, page) => {
    let i = state.game.cowPlayers.length - 1

    state.game.cowPlayers.forEach((cow, index) => {
        if (state.game.currentCowIndex < index) {
            switch (page) {
                case "birth":
                    if (!cow.born && i > index) {
                        i = index
                    }

                    break;

                case "mutate":
                    if (!cow.mutated && i > index) {
                        i = index
                    }

                    break;

                default:
                    break;
            }
        }
    });
    state.game.currentCowIndex = i
}

export const setCurrentCowIndex = (state, index) => state.game.currentCowIndex = index

export const born = (state) => state.game.cowPlayers[state.game.currentCowIndex].born = true

export const hasMutated = (state, { index, sex }) => {
    switch (sex) {
        case "Male":
            return state.game.cowPlayers[state.game.currentCowIndex].alleles.maleOrigin[index].hasMutated

        case "Female":
            return state.game.cowPlayers[state.game.currentCowIndex].alleles.femaleOrigin[index].hasMutated

        default:
            break;
    }
}

export const randomizeAlleleProduction = (state, { sex }) => {

    state.game.cowPlayers[state.game.currentCowIndex].alleles[sex].forEach(allele => {
        const alleleProductionChoices = [state.game.baseProduction, state.game.baseProduction * 2]
        const alleleProduction = alleleProductionChoices[Math.floor(Math.random() * alleleProductionChoices.length)]

        allele.production = alleleProduction
    })

    state.game.cowPlayers[state.game.currentCowIndex].birthed[sex] = true
    state.game.cowPlayers[state.game.currentCowIndex].born = state.game.cowPlayers[state.game.currentCowIndex].birthed.male && state.game.cowPlayers[state.game.currentCowIndex].birthed.female

}

export const applyMutation = (state, { allele, operator, position }) => {
    state.game.cowPlayers[state.game.currentCowIndex].alleles[allele.sex][allele.index].production = operator.fn(allele.production)
    state.game.cowPlayers[state.game.currentCowIndex].alleles[allele.sex][allele.index].hasMutated = true
    state.game.cowPlayers[state.game.currentCowIndex].activeMutations = [...state.game.cowPlayers[state.game.currentCowIndex].activeMutations, { operator: { ...operator, name: operator.name(allele) }, allele, position }]
    state.game.cowPlayers[state.game.currentCowIndex].mutationsRemaining -= 1
    if (state.game.cowPlayers[state.game.currentCowIndex].mutationsRemaining <= 0) {
        state.game.cowPlayers[state.game.currentCowIndex].mutated = true
    }
}





