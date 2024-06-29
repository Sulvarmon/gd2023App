import { createSlice } from '@reduxjs/toolkit'
import Cookies from 'js-cookie';

export const Theme = createSlice({
    name: 'theme',
    initialState: {
        value: Cookies.get('themeReact') || 'white'
    },
    reducers: {
        change: (state, action) => {
            state.value = action.payload;
        }
    }
})

export const {  change } = Theme.actions

export default Theme.reducer