import { createSelector } from 'reselect'

const storeSelector = state => state.Pag

export const PagSelector = action => createSelector(storeSelector, state => state[action])
