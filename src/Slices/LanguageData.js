import { createSlice } from '@reduxjs/toolkit'

export const LanguageData = createSlice({
    name: 'languageData',
    initialState: {
        value: []
    },
    reducers: {
        data: (state, action) => {
            state.value = action.payload;
        }
    }
})

// Action creators are generated for each case reducer function
export const {data} = LanguageData.actions

export default LanguageData.reducer