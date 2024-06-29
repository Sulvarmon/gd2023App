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
        setToOpositeT: state => {
            state.value = !state.value
        },
        
    }
})

export const {  setToFalseT, setToOpositeT } = ThemeCookie.actions

export default ThemeCookie.reducer