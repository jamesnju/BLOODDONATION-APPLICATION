import { createSlice } from "@reduxjs/toolkit";

interface Delete {
    delete: any;
    isOpen: boolean;
    isActive: string;
}
const initialState: Delete={
    delete: {},
    isOpen: false,
    isActive: "",
}
const deleteSlice= createSlice({
    name:"delete",
    initialState,
    reducers:{
        deleteAction:(state,action) =>{
            state.delete=action.payload
        },
        isOpenAction:(state,action)=>{
            state.isOpen = !state.isOpen
        },
        isActiveAction:(state,action)=>{
            state.isActive =action.payload
        }


    }
})
export const {deleteAction,isOpenAction,isActiveAction} = deleteSlice.actions;
export default deleteSlice.reducer;