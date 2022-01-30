import defaultState from './state'

export const resetState = (context) => context.commit("setState", defaultState())

export const toggleMutationButton = (context, { line, column }) => context.commit("toggleMutationButton", { line, column })

export const toggleBirthButton = (context, sex) => context.commit("toggleBirthButton", sex)

export const registerCow = (context, { name, numberOfAlleles }) => context.commit('registerCow', { name, numberOfAlleles })

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

// Ajeitar CSS e frases

// Apagar debugs