import { configureStore } from "@reduxjs/toolkit"
import { fruitReducer } from "./features/fruitSection/fruitSlice";
import logger from "redux-logger";

const store = configureStore({
    reducer: {
        fruit: fruitReducer,
    },
    middleware: (getDefaultMiddleware) => {
        // console.log(getDefaultMiddleware());
        // const defaultArray = getDefaultMiddleware();
        // return [...defaultArray, logger];

        return getDefaultMiddleware().concat(logger);
    },
});

export default store;