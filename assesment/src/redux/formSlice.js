import React from 'react'
import { createSlice } from '@reduxjs/toolkit'

const formSlice = createSlice({
    name: 'form',
    initialState: {
        data: []
    },
    reducers: {
        submitData: (state, action) => {
            state.data.push(action.payload)
        },
        updateData: (state, action) => {
            const { index, updateData } = action.payload;
            state.data[index] = updateData
        }
    }

}
)
export const { submitData, updateData } = formSlice.actions;


export default formSlice.reducer