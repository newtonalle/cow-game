const state = {
    buttonsState: {
        birthButtons: { male: false, female: false },
    },
    cowPlayer: {
        currentStage: "",
        baseProduction: 0,
        activeMutations: [],
        born: false,
        name: "",
        mutationsRemaining: 0,
        alleles: {
            male: [
            ],
            female: [
            ],
        },
    }
}

export default () => state