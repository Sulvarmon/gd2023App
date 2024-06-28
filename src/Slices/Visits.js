import { createSlice } from '@reduxjs/toolkit'

export const Visits = createSlice({
    name: 'visits',
    initialState: {
        value: ''
    },
    reducers: {
        pageVisit: (state, action) => {
            state.value = action.payload;
        }
            
    }
})

export const { pageVisit } = Visits.actions

export default Visits.reducer