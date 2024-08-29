import { createSlice } from "@reduxjs/toolkit";

interface ToggleState{
    toggle: boolean;
}

const initialState: ToggleState = {
    toggle: true,
}

const toggleSlice = createSlice({
    name:"toggle",
    initialState,
    reducers:{
        toggleAction: (state) => {
            state.toggle = !state.toggle;
        },
    },
});
export const { toggleAction } = toggleSlice.actions;
export default toggleSlice.reducer;