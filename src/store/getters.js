import { calculateCowProduction } from '../helpers/index.js'

export const hasGameRegistered = (state) => {
    if (state.game.hasRegistered) {
        return true
    }
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
        if (state.game.cowPlayers[index].mutationsRemaining <= 0) {
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

    cowPlayers.sort((a, b) => calculateCowProduction(b) - calculateCowProduction(a))

    return cowPlayers
}
