import { createSlice } from "@reduxjs/toolkit";

export const ShowCookieContainer = createSlice({
    name: 'showCookieContainer',
    initialState:{
        value: true
    },
    reducers:{
        setToTrueC:(state) =>{
            state.value = true
        },
        setToFalseC:(state)=>{
            state.value = false
        }
    }
})

export const { setToFalseC, setToTrueC} = ShowCookieContainer.actions

export default ShowCookieContainer.reducer