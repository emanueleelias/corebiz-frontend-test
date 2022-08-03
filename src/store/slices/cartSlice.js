import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({

    name: 'cart',
    initialState: {
        counter: 0
    },
    reducers: {
        increment: (state) => {
            state.counter += 1;
        },
        setCounterValue: (state, action) => {
            state.counter = action.payload;
        }
    }
});

export const { increment, setCounterValue } = cartSlice.actions;