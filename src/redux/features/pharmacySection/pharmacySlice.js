import { createSlice } from "@reduxjs/toolkit";
import { buyFruit } from "../fruitSection/fruitSlice";

const pharmacySlice = createSlice({
    name: "pharmacy",
    initialState: {
        noOfPharmacyItems: 5,
    },
    reducers: {
        buyPharmacyItems: (state, action) => {
            console.log(action);
            state.noOfPharmacyItems = state.noOfPharmacyItems - action.payload;
        },
        addPharmacyItems: (state, action) => {
            state.noOfPharmacyItems++;
        },
    },

    // extraReducers: {
    //    [buyFruit]: (state, action) => {
    //     console.log("Buying fruits");
    //        state.noOfPharmacyItems = state.noOfPharmacyItems - action.payload;
    //    }
    // }

    extraReducers: (builder) => {
        builder.addCase(buyFruit, (state, action) => {
            console.log("Buying fruits");
            state.noOfPharmacyItems = state.noOfPharmacyItems - action.payload;
        });
    }
});

export const pharmacyReducer = pharmacySlice.reducer;

export const { buyPharmacyItems, addPharmacyItems } = pharmacySlice.actions;