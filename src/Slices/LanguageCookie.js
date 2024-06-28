import { createSlice } from '@reduxjs/toolkit'
import Cookies from 'js-cookie';

export const LanguageCookie = createSlice({
    name: 'languageCookie',
    initialState: {
        value: !!Cookies.get('languageReact')
    },
    reducers: {
        setToFalseL: state => {
            state.value = false
        },
        setToOpositeL: state => {
            state.value = !state.value
        },
        
    }
})

export const {  setToFalseL, setToOpositeL } = LanguageCookie.actions

export default LanguageCookie.reducer