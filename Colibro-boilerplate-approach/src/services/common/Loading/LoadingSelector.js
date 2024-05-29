import { createSelector } from 'reselect'

const storeSelector = state => state.loading

export const loadingSelector = action => createSelector(storeSelector, state => state[action])
