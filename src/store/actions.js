import defaultState from './state'

export const resetState = (context) => context.commit('setState', defaultState())

export const toggleMutationButton = (context, { line, column }) => context.commit("toggleMutationButton", { line, column })

export const toggleBirthButton = (context, sex) => context.commit("toggleBirthButton", sex)

export const setGamemode = (context, gamemode) => context.commit("setGamemode", gamemode)

export const setCurrentStage = (context, stage) => context.commit("setCurrentStage", stage)

export const registerCow = (context, { name, numberOfGenes }) => {
    context.commit('setState', defaultState())
    context.commit('setGamemode', {
        name: "singleplayer",
        label: "Um jogador"
    })
    context.commit('registerCow', { name, numberOfGenes })

}

export const removeMultiplayerCow = (context, index) => context.commit("removeMultiplayerCow", index)

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

export const setAlleleProduction = (context, { index, amount, sex }) => context.commit('setAlleleProduction', { index, amount, sex })

export const multiplyAlleleProduction = (context, { index, multiplyingFactor, sex }) => context.commit('multiplyAlleleProduction', { index, multiplyingFactor, sex })

export const applyMutation = (context, { allele, operator, position }) => {
    context.commit('applyMutation', { allele, operator, position })
    console.log(context)
    if (!context.state.cowPlayer.mutationsRemaining) {
        alert('Número de mutações na vida atingido')
    }
}


// Apagar debugs

// Fazer Multiplayer Local - Sistema de repetir páginas para cada player

// Bloquear o usuário de acessar páginas multiplayer sem ter feito tudo com todas as vacas na
// página anterior

// Páginas Restantes Multiplayer: Mutate, Results

// Corrigir erro de centralização das tabelas

