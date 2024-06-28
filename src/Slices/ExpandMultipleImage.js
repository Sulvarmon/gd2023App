import { createSlice } from '@reduxjs/toolkit'

export const ExpandMultipleImage = createSlice({
    name: 'expandMultipleImage',
    initialState: {
        value: -1
    },
    reducers: {
        setTo: (state, action) => {
            state.value = action.payload;
        }
        
    }
})

export const { setTo } = ExpandMultipleImage.actions

export default ExpandMultipleImage.reducer