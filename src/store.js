
import {configureStore} from "@reduxjs/toolkit"
import pasteReducer from "./Redux/PastSlice"

export const store = configureStore({
  reducer:{
      paste: pasteReducer
  }
})