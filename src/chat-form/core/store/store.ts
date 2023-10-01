import { configureStore } from "@reduxjs/toolkit";
import { FORM_REDUCER } from "../../slices";

export const store = configureStore({
    reducer: {
        ...FORM_REDUCER
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch