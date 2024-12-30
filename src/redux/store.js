import { configureStore } from "@reduxjs/toolkit"
import { fruitReducer } from "./features/fruitSection/fruitSlice";
import logger from "redux-logger";
import { pharmacyReducer } from "./features/pharmacySection/pharmacySlice";
import { todoReducer } from "./features/todoSection/todoSlice";

const store = configureStore({
    reducer: {
        fruit: fruitReducer,
        pharmacy: pharmacyReducer,
        todo: todoReducer
    },
    middleware: (getDefaultMiddleware) => {
        // console.log(getDefaultMiddleware());
        // const defaultArray = getDefaultMiddleware();
        // return [...defaultArray, logger];

        return getDefaultMiddleware().concat(logger);
    },
});

export default store;