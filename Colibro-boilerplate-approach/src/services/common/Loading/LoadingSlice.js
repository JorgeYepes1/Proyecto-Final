import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    setLoading(state, { payload }) {
      const key = payload.split("/");

      const indexAr = ["Request", "Success", "Fail"].map((i) =>
        key[1].indexOf(i)
      );
      let index = indexAr.filter((i) => i >= 0);

      const name = key[1].substr(0, index);
      const prop = `${key[0]}/${name}Request`;

      /**
       * Clean store strategy
       */
      if (/Request/.test(payload)) {
        state[prop] = /Request/.test(payload);
      } else {
        state = state.filter((i) => i);
      }
    },
  },
});

const loadingActions = loadingSlice.actions;
const loadingReducer = loadingSlice.reducer;

export { loadingActions, loadingReducer };
