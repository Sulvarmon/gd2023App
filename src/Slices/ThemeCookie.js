import { createSlice } from '@reduxjs/toolkit'
import Cookies from 'js-cookie';

export const ThemeCookie = createSlice({
    name: 'themeCookie',
    initialState: {
        value: !!Cookies.get('themeReact')
    },
    reducers: {
        setToFalseT: state => {
            state.value = false
        },
        setToTrueT: state => {
            state.value = true
        },
        setToOpositeT: state => {
            state.value = !state.value
        },

    }
})

export const { setToFalseT, setToOpositeT, setToTrueT } = ThemeCookie.actions

export default ThemeCookie.reducer