import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../app/store";

type ExempleState = {
  test: string
}

const exempleSlice = createSlice({
  name: 'exemple',
  initialState: {
    test: "état initial"
  } as ExempleState,
  reducers: {
    uneAction(state) {
      state.test= 'je suis test'
    },
    autreAction(state, action : PayloadAction<string>){
      state.test = action.payload
    },
    resetAction(state){
      state.test= "état initial"
    }
  },
})

export default exempleSlice.reducer
export const {uneAction, autreAction, resetAction} = exempleSlice.actions
export const exempleTest = (state: RootState) => state.exemple
