import { createSlice } from '@reduxjs/toolkit'
import Cookies from 'js-cookie';

export const Language = createSlice({
    name: 'language',
    initialState: {
        value: Cookies.get('languageReact') || 'geo'
    },
    reducers: {
        change: (state, action) => {
            state.value = action.payload;
        }
    }
})

export const {  change } = Language.actions

export default Language.reducer