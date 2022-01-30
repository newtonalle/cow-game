const state = {
    buttonsState: {
        birthButtons: { male: false, female: false },
    },
    cowPlayer: {
        activeMutations: [],
        born: false,
        name: "",
        mutationsRemaining: 5,
        alleles: {
            male: [
            ],
            female: [
            ],
        },
    }
}

export default () => state