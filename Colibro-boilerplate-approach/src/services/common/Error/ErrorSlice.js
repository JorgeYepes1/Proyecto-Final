import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

const errorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    setError(state, { payload }) {
      // console.log('payload: ', payload)
      // const key = payload.split('/')

      // const indexAr = ['Request', 'Success', 'Fail'].map(i => key[1].indexOf(i))
      // let index = indexAr.filter(i => i >= 0)

      // const name = key[1].substr(0, index)
      // const prop = `${key[0]}/${name}Request`

      // state[prop] = /Request/.test(payload);
    },

    /**
     * 
     * @param state
     * @param payload
     */
    dismissError(state, { payload }) {
      state[payload] = null
    }
  }
})

const errorActions = errorSlice.actions
const errorReducer = errorSlice.reducer

export { errorActions, errorReducer }
