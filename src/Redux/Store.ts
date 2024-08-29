import {configureStore} from "@reduxjs/toolkit";
import toggleSlice from "./slice/toggleSlice";
import DeleteSlice from "./slice/DeleteSlice";
import EditSlice from "./slice/EditSlice";

export const store = configureStore({
    reducer:{
        toggle:toggleSlice,
        editdata:EditSlice,
        delete:DeleteSlice
        
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;