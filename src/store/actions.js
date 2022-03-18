import defaultState from './state'

export const resetState = (context) => context.commit('setState', defaultState())

export const setGamemode = (context, gamemode) => context.commit("setGamemode", gamemode)

export const setCurrentStage = (context, stage) => context.commit("setCurrentStage", stage)

export const registerGame = (context, { cowPlayers, numberOfGenes, gamemode }) => {
    context.commit('setState', defaultState())
    context.commit("registerGame", { cowPlayers, numberOfGenes })
    context.commit('setGamemode',
        gamemode,
    )
}

export const nextCow = (context, page) => context.commit('nextCow', page)

export const setCurrentCowIndex = (context, index) => context.commit('setCurrentCowIndex', index)

export const born = (context) => context.commit('born')

export const hasMutated = (context, { index, sex }) => context.commit('hasMutated', { index, sex })

export const randomizeAlleleProduction = (context, { index, sex }) => context.commit('randomizeAlleleProduction', { index, sex })

export const applyMutation = (context, { allele, operator, position }) => {
    context.commit('applyMutation', { allele, operator, position })
    console.log(context)
    if (!context.state.game.cowPlayers[context.state.game.currentCowIndex].mutationsRemaining) {
        alert('Número de mutações na vida atingido')
    }
}


// Verificar se tudo está funcional

// Fundir galhos no git

// Publicar




