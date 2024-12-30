import { createSlice } from "@reduxjs/toolkit";

const fruitSlice = createSlice({
    name: "fruit",
    initialState: {
        noOffruits: 5,
    },
    reducers: {
        buyFruit: (state, action) => {
            console.log(action);
            state.noOffruits= state.noOffruits - action.payload;
        },
        addFruit: (state, action) => {
            state.noOffruits++;
        },

    },
});

export const fruitReducer = fruitSlice.reducer;

export const { buyFruit, addFruit } = fruitSlice.actions;