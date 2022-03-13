export default () => ({
    game: {
        currentGamemode: "singleplayer",
        hasRegistered: false,
        currentStage: "",
        baseProduction: 0,
        numberOfGenes: 0,
        currentCowIndex: 0,
        cowPlayers: [],
    },

    cowPlayer: {
        birthed: {
            male: false,
            female: false
        },
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
})