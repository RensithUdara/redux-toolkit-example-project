import { configureStore } from "@reduxjs/toolkit"
import { fruitReducer } from "./features/fruitSection/fruitSlice";
import logger from "redux-logger";
import { pharmacyReducer } from "./features/pharmacySection/pharmacySlice";

const store = configureStore({
    reducer: {
        fruit: fruitReducer,
        pharmacy: pharmacyReducer,
    },
    middleware: (getDefaultMiddleware) => {
        // console.log(getDefaultMiddleware());
        // const defaultArray = getDefaultMiddleware();
        // return [...defaultArray, logger];

        return getDefaultMiddleware().concat(logger);
    },
});

export default store;