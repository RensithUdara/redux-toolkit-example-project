import { createSlice } from "@reduxjs/toolkit";

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

    extraReducers: {
       "fruit/buyFruit": (state, action) => {
        console.log("Buying fruits");
           state.noOfPharmacyItems = state.noOfPharmacyItems - action.payload;
       }
    }
});

export const pharmacyReducer = pharmacySlice.reducer;

export const { buyPharmacyItems, addPharmacyItems } = pharmacySlice.actions;