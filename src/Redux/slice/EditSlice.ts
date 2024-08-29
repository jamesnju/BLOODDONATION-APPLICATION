import { createSlice } from "@reduxjs/toolkit";

interface EditState {
    Editdata: any;
    isOpen: boolean;
    isActive: string;
}
const initialState: EditState = {
    Editdata: {},
    isOpen: false,
    isActive: "",
}

const editState = createSlice({
    name: "editdata",
    initialState,
    reducers: {
        editAction: (state, action) => {
            state.Editdata = action.payload;
        },
        openAction: (state) => {
            state.isOpen = !state.isOpen;
        },
        activeAction: (state, action) => {
            state.isActive = action.payload;
        },
    },
});
export const {editAction,openAction,activeAction} = editState.actions;
export default editState.reducer;