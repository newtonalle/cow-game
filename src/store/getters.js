import { calculateCowProduction } from '../helpers/index.js'

export const hasGameRegistered = (state) => {
    return state.game.hasRegistered

}

export const hasGameBorn = (state) => {
    for (let index = 0; index < state.game.cowPlayers.length; index++) {
        if (!state.game.cowPlayers[index].born) {
            return false
        }
    }
    return true
}

export const hasGameMutated = (state) => {
    for (let index = 0; index < state.game.cowPlayers.length; index++) {
        if (!state.game.cowPlayers[index].mutated) {
            return false
        }
    }
    return true
}

export const getCurrentCowPlayer = (state) => state.game.cowPlayers[state.game.currentCowIndex]

export const getCurrentStage = (state) => state.game.currentStage

export const getButtonsState = (state) => state.buttonsState

export const getGamemode = (state) => state.game

export const getCowTotalProduction = (state) => {
    return calculateCowProduction(state.game.cowPlayers[state.game.currentCowIndex])
}

export const getSortedCowPlayers = (state) => {
    let cowPlayers = state.game.cowPlayers
    let sortedCowPlayers = [...cowPlayers].sort((a, b) => calculateCowProduction(b) - calculateCowProduction(a))
    return sortedCowPlayers
}
