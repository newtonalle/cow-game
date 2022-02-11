import defaultState from './state'

export const resetState = (context) => context.commit('setState', defaultState())

export const toggleMutationButton = (context, { line, column }) => context.commit("toggleMutationButton", { line, column })

export const toggleBirthButton = (context, sex) => context.commit("toggleBirthButton", sex)

export const setCurrentStage = (context, stage) => context.commit("setCurrentStage", stage)

export const registerCow = (context, { name, numberOfGenes }) => context.commit('registerCow', { name, numberOfGenes })

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

// Ajeitar CSS e frases - Done

// Só mostrar "continuar jogo" no navbar se um jogo já existir- Done

// Alterar botões - Done

// Alterar tabelas - J

// Escrever texto da home do jogo da vaca - Done

// Arrumar bug de duplicação de alelos - J

// Quando o alelo não alterar de valor ao ser operado alterar frase para - Mutação Neutra


// Apagar debugs