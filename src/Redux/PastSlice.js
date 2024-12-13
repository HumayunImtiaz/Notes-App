import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-hot-toast"

const initialState = {
  pastes: localStorage.getItem("pastes")
    ? JSON.parse(localStorage.getItem("pastes"))
    : []
}




    const PastSlice = createSlice({
      name: "paste",
      initialState,
      reducers: {

    // For Create 

    AddToPastes: (state, action) => {
      const paste = action.payload
      const index = state.pastes.findIndex((item) => item._id === paste._id)
      if (index >= 0) {
        // If the course is already in the Pastes, do not modify the quantity
        toast.error("Paste already exist")
        return
      }
      // If the course is not in the Pastes, add it to the Pastes
      state.pastes.push(paste)
      
      // Update to localstorage
      localStorage.setItem("pastes", JSON.stringify(state.pastes))
      // show toast
      toast.success("Paste added")
    },

    // For update 
    UpdatetoPastes: (state,action) => {
       const paste=action.payload;
       const index= state.pastes.findIndex((item)=>
      item._id===paste._id);
       
       if(index>=0){
        state.pastes[index]=paste;
        localStorage.setItem("pastes", JSON.stringify(state.pastes));
        toast.success("Paste Updated")
       }
      
    },
    resetAllPastes: (state, action) => {
      state.pastes=[];

      localStorage.removeItem("pastes");
    
    },
    removeFromPast:(state,action)=>{
      const pasteId=action.payload;
      console.log(pasteId);

      const index=state.pastes.findIndex((item)=>
        item._id===pasteId)

        if(index >=0){
          state.pastes.splice(index,1);
          localStorage.setItem("pastes",JSON.stringify(state.pastes));
          toast.success("Past Deleted")
        }
      


    }
  },
})

// Action creators are generated for each case reducer function
export const { AddToPastes,  UpdatetoPastes, resetAllPastes,removeFromPast } =PastSlice.actions

export default PastSlice.reducer