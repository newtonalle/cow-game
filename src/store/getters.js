
export const hasRegistered = (state) => state.cowPlayer.name != ""

export const hasBorn = (state) => state.cowPlayer.born

export const hasMutated = (state) => state.cowPlayer.mutationsRemaining <= 0

export const getCowPlayer = (state) => state.cowPlayer

export const getButtonsState = (state) => state.buttonsState

export const getCowTotalProduction = (state) => state.cowPlayer.alleles.male.reduce((production, allele) => allele.production + production, 0) +
    state.cowPlayer.alleles.female.reduce((production, allele) => allele.production + production, 0)

