import { createSlice } from '@reduxjs/toolkit'
import Cookies from 'js-cookie';

export const ThemeCookie = createSlice({
    name: 'themeCookie',
    initialState: {
        value: Cookies.get('themeCookie') || false
    },
    reducers: {
        setToFalse: state => {
            state.value = false
        },
        setToOposite: state => {
            state.value = !state.value
        },
        
    }
})

export const {  setToFalse, setToOposite } = ThemeCookie.actions

export default ThemeCookie.reducer