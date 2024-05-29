import reduxSaga from 'redux-saga'
import { configureStore } from '@reduxjs/toolkit'
import rootSaga from './Sagas'
import rootReducer from './Reducers'

const sagaMiddleware = reduxSaga()


export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({thunk: false}).concat(sagaMiddleware)
})

sagaMiddleware.run(rootSaga)