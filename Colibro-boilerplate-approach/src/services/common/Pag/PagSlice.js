import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogin: false,
  Historys:[],
  Author:[],
  Books:[],
  AudioBooks:[],
  Comics:[],
};

const PagSlice = createSlice({
  name: "Pag",
  initialState,
  reducers: {
    setIsLogin(state, { payload }) {
      state.isLogin = payload
    },
    setButtonsSider(state, { payload }) {
      state.buttonsSider = payload
    },
    setStyleDash(state, { payload }) {
      state.styleDash = payload
    },
    getHistorys(){},
    getAllHistorys(){},
    getHistorysByGenre(){},
    getHistorysByTitle(){},
    setHistorys(state,{payload}){
      state.Historys=payload
    },
    getAuthor(){},
    setAuthor(state,{payload}){
      state.Author=payload
    },
    getBooks(){},
    setBooks(state,{payload}){
      state.Books=payload
    },
    getAudioBooks(){},
    setAudioBooks(state,{payload}){
      state.AudioBooks=payload
    },
    getComics(){},
    setComics(state,{payload}){
      state.Comics=payload
    }
  },
});

const PagActions = PagSlice.actions;
const PagReducer = PagSlice.reducer;

export { PagActions, PagReducer };
